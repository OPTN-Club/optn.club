import { capitalCase } from 'change-case';
import {
  computed,
  reactive,
  Ref,
  watch,
} from 'vue';

import { byFullname } from './models';
import { SettingsFormV1 } from './SettingsFormV1';
import {
  BuildSectionUpgrades,
  BuildSettings,
  DriveType,
  FormattingFormProps,
  FrontAndRearSettings,
  FrontAndRearWithUnits,
  TuneSettings,
} from './types';
import { formatUnit, formatUnitHeaders } from './unitsOfMeasure';
import { formatFloat, addSuffix as suffixize } from './utils';

const tableSeparator = '\n######\n';

function bold(value: string): string {
  if (!value) return value;
  return `**${value.replace(/\*\*/g, '')}**`;
}

function formatTableRow(row: string[], boldFirstCol = false) {
  const r = [...row];
  if (boldFirstCol) r[0] = bold(r[0]);
  return `|${r.join('|')}|`;
}

enum TextAlign {
  left = ':--',
  right = '--:',
  center = ':-:',
}

function formatTable(header: string[], body: string[][], boldFirstCol = false, textAlign = TextAlign.right): string[] {
  const rowSeparator = [':--', textAlign];
  for (let index = 2; index < header.length; index++) {
    rowSeparator.push(textAlign);
  }
  return [
    formatTableRow(header.map(bold)),
    formatTableRow(rowSeparator),
    ...body.map((row) => formatTableRow(row, boldFirstCol)),
    tableSeparator,
  ];
}

function formatFrontRear(headers: string[], values: FrontAndRearSettings[], precision = 1, suffix = ''): string[] {
  if (values.every((v) => v.na)) {
    const cells = Array.from({ length: values.length }, () => '');
    return formatTable(headers, [['Not Applicable', ...cells]]);
  }
  const body: string[][] = [
    ['Front', ...values.map((value) => formatFloat(value.front, precision, suffix))],
    ['Rear', ...values.map((value) => formatFloat(value.rear, precision, suffix))],
  ];

  return formatTable(headers, body);
}

function formatFrontRearWithUnit(header: string, value: FrontAndRearWithUnits, precision = 1): string[] {
  const headers = [
    header,
    ...formatUnitHeaders(value.units),
  ];

  if (value.na) {
    return formatTable(headers, [['Not Applicable', ...formatUnit('', value.units, precision)]]);
  }

  const body: string[][] = [
    ['Front', ...formatUnit(value.front, value.units, precision)],
    ['Rear', ...formatUnit(value.rear, value.units, precision)],
  ];

  return formatTable(headers, body);
}

function formatTires(tune: TuneSettings): string[] {
  return formatFrontRearWithUnit('Tires', tune.tires, 1);
}

function formatGears(tune: TuneSettings): string[] {
  const precision = 2;
  const headers = ['Gears', 'Ratio'];

  if (tune.gears.na) {
    return formatTable(headers, [['Not Applicable', '']]);
  }

  const body: string[][] = [
    ['Final Drive', parseFloat(tune.gears.ratios[0]).toFixed(precision)],
  ];
  for (let index = 1; index < tune.gears.ratios.length; index++) {
    const value = parseFloat(tune.gears.ratios[index]);
    if (!value) break;
    body.push([`${index}${suffixize(index)}`, value.toFixed(precision)]);
  }

  if (body.length === 1 && tune.gears.ratios[0] === '') return [];

  return formatTable(headers, body);
}

function formatAlignment(tune: TuneSettings): string[] {
  return formatFrontRear(['Alignment', 'Camber', 'Toe', 'Caster'], [tune.camber, tune.toe, { front: tune.caster, rear: '' }], 1, '°');
}

function formatAntiRollbars(tune: TuneSettings): string[] {
  const headers = ['ARBs', ''];
  if (tune.arb.na) {
    return formatTable(headers, [['Not Applicable', '']]);
  }
  return formatFrontRear(headers, [tune.arb]);
}

function formatSprings(tune: TuneSettings): string[] {
  const headers = ['ARBs', ''];
  if (tune.arb.na) {
    return formatTable(headers, [['Not Applicable', '']]);
  }
  return [
    ...formatFrontRearWithUnit('Springs', tune.springs, 1),
    ...formatFrontRearWithUnit('Ride Height', tune.rideHeight, 1),
  ];
}

function formatDamping(tune: TuneSettings): string[] {
  return formatFrontRear(['Damping', 'Rebound', 'Bump'], [tune.damping, tune.bump]);
}

function formatAero(tune: TuneSettings): string[] {
  const headers = ['Aero', ...formatUnitHeaders(tune.aero.units)];

  if (tune.aero.na) {
    return formatTable(headers, [['Not Applicable', ...formatUnit('', tune.aero.units)]]);
  }

  const front = ['Front'];
  const rear = ['Rear'];
  if (tune.aero.front === '') {
    front.push('N/A', '', '');
  } else {
    front.push(...formatUnit(tune.aero.front, tune.aero.units, 1));
  }
  if (tune.aero.rear === '') {
    rear.push('N/A', '', '');
  } else {
    rear.push(...formatUnit(tune.aero.rear, tune.aero.units, 1));
  }
  return formatTable(headers, [front, rear]);
}

function formatBrakes(tune: TuneSettings): string[] {
  const headers = ['Brakes', '%'];

  if (!tune.brake.bias && !tune.brake.pressure) {
    return formatTable(headers, [['Not Applicable', '']]);
  }

  return formatTable(headers, [
    ['Balance', formatFloat(tune.brake.bias, 0, '%')],
    ['Pressure', formatFloat(tune.brake.pressure, 0, '%')],
  ]);
}

function isDrivetrain(value: string): value is DriveType {
  return Object.values(DriveType).includes(value as DriveType);
}

export function getDrivetrain(build: BuildSettings): DriveType {
  if (build.conversions.drivetrain) {
    return build.conversions.drivetrain;
  }
  return DriveType.awd;
}

function formatDifferential(form: SettingsFormV1): string[] {
  const drivetrain = getDrivetrain(form.build);
  const header = ['Differential', 'Accel', 'Decel'];

  if (form.tune.diff.na) {
    return formatTable(header, [['Not Applicable', '', '']]);
  }

  const front = ['Front', 'N/A', 'N/A'];
  const rear = ['Rear', 'N/A', 'N/A'];
  const center = ['Center', '', ''];
  const body: string[][] = [];

  if ([DriveType.fwd, DriveType.awd].includes(drivetrain)) {
    body.push(front);
    front[1] = formatFloat(form.tune.diff.front.accel, 0, '%');
    front[2] = formatFloat(form.tune.diff.front.decel, 0, '%');
  }

  if ([DriveType.rwd, DriveType.awd].includes(drivetrain)) {
    body.push(rear);
    rear[1] = formatFloat(form.tune.diff.rear.accel, 0, '%');
    rear[2] = formatFloat(form.tune.diff.rear.decel, 0, '%');
  }

  if (drivetrain === DriveType.awd) {
    body.push(center);
    center[1] = formatFloat(form.tune.diff.center, 0, '%');
    // ...formatTable(
    //   ['Center', ''],
    //   [['Balance', formatFloat(form.tune.diff.center, 0, '%')]],
    // ));
  }
  // const table = [
  //   '### Differential\n',
  //   ...formatTable(header, body),
  // ];

  return formatTable(header, body);
}

export function formatTune(form: SettingsFormV1, model: string): string[] {
  const car = byFullname.get(model);
  const text = [
    ...formatTires(form.tune),
    ...formatGears(form.tune),
    ...formatAlignment(form.tune),
    ...formatAntiRollbars(form.tune),
    ...formatSprings(form.tune),
    ...formatDamping(form.tune),
    ...formatAero(form.tune),
    ...formatBrakes(form.tune),
    ...formatDifferential(form),
  ];

  return text;
}

function formatConversions(build: BuildSettings, model: string): string[] {
  const headers = ['Conversions', ''];

  const car = byFullname.get(model);
  const drivetrain = build.conversions.drivetrain === car?.drive ? 'Stock' : build.conversions.drivetrain;

  const body = [
    ['Engine', build.conversions.engine || 'Stock'],
    ['Drivetrain', drivetrain || 'Stock'],
  ];
  if (build.conversions.aspiration) {
    body.push(['Aspiration', build.conversions.aspiration || 'Stock']);
  }
  if (build.conversions.aspiration) {
    body.push(['Body Kit', build.conversions.bodyKit || 'Stock']);
  }
  return formatTable(headers, body);
}

function formatTiresAndRims(build: BuildSettings): string[] {
  return formatTable(
    ['Tires And Rims', ''],
    [
      ['Compound', build.tiresAndRims.compound],
      ['Tire Width', `Front ${build.tiresAndRims.width.front} mm, Rear ${build.tiresAndRims.width.rear} mm`],
      ['Rim Style', `${build.tiresAndRims.rimStyle.type} ${build.tiresAndRims.rimStyle.name}`],
      ['Rim Size', `Front ${build.tiresAndRims.rimSize.front} in, Rear ${build.tiresAndRims.rimSize.rear} in`],
      ['Track Width', `Front ${build.tiresAndRims.trackWidth.front}, Rear ${build.tiresAndRims.trackWidth.rear}`],
      ['Profile Size', `Front ${build.tiresAndRims.profileSize.front}, Rear ${build.tiresAndRims.profileSize.rear}`],
    ],
    false,
    TextAlign.left,
  );
}

function formatAeroBuild(build: BuildSettings): string[] {
  const aero: string[][] = [];
  if (build.aeroAndAppearance.frontBumper) {
    aero.push(['Front Bumper', build.aeroAndAppearance.frontBumper]);
  }
  if (build.aeroAndAppearance.rearBumper) {
    aero.push(['Rear Bumper', build.aeroAndAppearance.rearBumper]);
  }
  if (build.aeroAndAppearance.rearWing) {
    aero.push(['Rear Wing', build.aeroAndAppearance.rearWing]);
  }
  if (build.aeroAndAppearance.sideSkirts) {
    aero.push(['Side Skirts', build.aeroAndAppearance.sideSkirts]);
  }
  if (build.aeroAndAppearance.hood) {
    aero.push(['Hood', build.aeroAndAppearance.hood]);
  }

  if (aero.length === 0) return [];

  return formatTable(['Aero and Appearance', ''], aero, false, TextAlign.left);
}

function formatBuildSection<T extends BuildSectionUpgrades>(section: T) {
  const keys = Object.keys(section);
  return keys
    .filter((key) => {
      const value = section[key as keyof T];
      return value && value.toString() !== 'N/A';
    })
    .map((key) => [capitalCase(key), section[key as keyof T]]);
}

interface StatUnits {
  weight: string;
  torque: string;
  speed: string;
}

const statUnits: Record<'Metric' | 'Imperial', StatUnits> = {
  Metric: {
    weight: 'kg',
    torque: 'nm',
    speed: 'kph',
  },
  Imperial: {
    weight: 'lbs',
    torque: 'lb-ft',
    speed: 'mph',
  },
};

function formatStatisticsTable(form: SettingsFormV1, globalUnits: 'Metric' | 'Imperial') {
  const text: string[] = [];
  const piClass = `${form.stats.classification} ${form.stats.pi}`.trim();
  if (form.model) text.push(`${form.model}`);
  text.push(`${form.stats.classification} ${form.stats.pi}`);
  const header = `#${text.join(' - ')}\n`;

  const units = statUnits[globalUnits];
  const stats: string[][] = [];

  if (form.stats.weight) stats.push(['Weight', `${form.stats.weight} ${units.weight}`]);
  if (form.stats.balance) stats.push(['Balance', `${form.stats.balance}%`]);
  if (form.stats.hp) stats.push(['HP', `${form.stats.hp}`]);
  if (form.stats.torque) stats.push(['Torque', `${form.stats.torque} ${units.torque}`]);
  if (form.stats.topSpeed) stats.push(['Top Speed', `${form.stats.topSpeed} ${units.speed}`]);
  if (form.stats.zeroToSixty) stats.push(['0-60', `${form.stats.zeroToSixty}s`]);
  if (form.stats.zeroToHundred) stats.push(['0-100', `${form.stats.zeroToHundred}s`]);
  if (form.stats.shareCode) stats.push(['Share Code', `${form.stats.shareCode}`]);

  return [
    header,
    ...formatTable(['Stats', ''], stats, true, TextAlign.left),
  ];
}

export function formatBuild(build: BuildSettings, model: string): string[] {
  const text = [
    ...formatConversions(build, model),
    ...formatTable(['Engine', ''], formatBuildSection(build.engine), false, TextAlign.left),
    ...formatTable(['Platform And Handling', ''], formatBuildSection(build.platformAndHandling), false, TextAlign.left),
    ...formatTable(['Drivetrain', ''], formatBuildSection(build.drivetrain), false, TextAlign.left),
    ...formatTiresAndRims(build),
    ...formatAeroBuild(build),
  ];

  return text;
}

export default function useRedditMarkdownGenerator(props: FormattingFormProps, form: SettingsFormV1, linkUrl: Ref<string>, globalUnit: Ref<'Metric' | 'Imperial'>) {
  const format = reactive({
    build: formatBuild,
    tune: formatTune,
  });

  watch(() => props.version, onVersionUpdated, { immediate: true });

  function onVersionUpdated() {
    if (props.version === 'v2') {
      format.build = formatBuild;
      format.tune = formatTune;
    } else {
      format.build = formatBuild;
      format.tune = formatTune;
    }
  }

  const markdown = computed(() => [
    ...formatStatisticsTable(form, globalUnit.value),
    `[View this tune on optn.club](${linkUrl.value})\n`,
    '---\n',
    '## Build\n',
    ...formatBuild(form.build, form.model),
    '---\n',
    '## Tune\n',
    ...formatTune(form, form.model),
    '---\n',
    'Formatted text generated by the [OPTN.club Tune Formatter](https://optn.club/formatter)  \n',
    'Submit bugs, feature requests, and questions on [Github](https://github.com/OPTN-Club/optn.club/issues)',
  ].join('\n'));

  return {
    markdown,
  };
}
