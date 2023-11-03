import { capitalCase } from 'change-case';
import { computed, Ref } from 'vue';
import { useRoute } from 'vue-router';

import {
  DifferentialTuneSettings,
  DriveType,
  FrontAndRearSettings,
  FrontAndRearWithUnits,
} from '../../../lib/types';
import { formatUnit, formatUnitHeaders } from '../../../lib/unitsOfMeasure';
import { formatFloat, addSuffix as suffixize } from '../../../lib/utils';

import {
  FMSetup,
  PerformanceUpgrades,
  TuneSettings,
} from './FMSetup';

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
  return formatFrontRear(
    ['Alignment', 'Camber', 'Toe', 'Caster', 'Steering Angle'],
    [
      tune.alignment.camber,
      tune.alignment.toe,
      { front: tune.alignment.caster, rear: '' },
      { front: tune.alignment.steeringAngle, rear: '' },
    ],
    1,
    '°',
  );
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
  return formatFrontRear(['Damping', 'Bump', 'Rebound'], [tune.bump, tune.rebound]);
}

function formatSuspensionGeometry(tune: TuneSettings): string[] {
  return formatFrontRear(
    ['Suspension Geometry', 'Roll Center Height Offset', 'Anti-Geometry Percent'],
    [tune.rollCenterHeightOffset, tune.antiGeometryPercent],
  );
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

function formatDifferential(diff: DifferentialTuneSettings, driveType: DriveType): string[] {
  const header = ['Differential', 'Accel', 'Decel'];

  if (diff.na) {
    return formatTable(header, [['Not Applicable', '', '']]);
  }

  const front = ['Front', 'N/A', 'N/A'];
  const rear = ['Rear', 'N/A', 'N/A'];
  const center = ['Center', '', ''];
  const body: string[][] = [];

  if ([DriveType.fwd, DriveType.awd].includes(driveType)) {
    body.push(front);
    front[1] = formatFloat(diff.front.accel, 0, '%');
    front[2] = formatFloat(diff.front.decel, 0, '%');
  }

  if ([DriveType.rwd, DriveType.awd].includes(driveType)) {
    body.push(rear);
    rear[1] = formatFloat(diff.rear.accel, 0, '%');
    rear[2] = formatFloat(diff.rear.decel, 0, '%');
  }

  if (driveType === DriveType.awd) {
    body.push(center);
    center[1] = formatFloat(diff.center, 0, '%');
  }

  return formatTable(header, body);
}

function formatSteeringWheel(tune: TuneSettings): string[] {
  const headers = ['Steering Wheel', ''];

  if (tune.steeringWheel.na) {
    return formatTable(headers, [['Not Applicable', '']]);
  }

  return formatTable(headers, [
    ['FFB Scale', tune.steeringWheel.ffbScale],
    ['Steering Lock Range', tune.steeringWheel.steeringLockRange],
  ]);
}

export function formatTune(form: FMSetup, model: string): string[] {
  const text = [
    ...formatTires(form.tune),
    ...formatGears(form.tune),
    ...formatAlignment(form.tune),
    ...formatAntiRollbars(form.tune),
    ...formatSprings(form.tune),
    ...formatDamping(form.tune),
    ...formatSuspensionGeometry(form.tune),
    ...formatAero(form.tune),
    ...formatBrakes(form.tune),
    ...formatDifferential(form.tune.diff, form.upgrades.conversions.drivetrain),
    ...formatSteeringWheel(form.tune),
  ];

  return text;
}

function formatConversions(upgrades: PerformanceUpgrades, driveType: DriveType): string[] {
  const headers = ['Conversions', ''];

  const body = [
    ['Engine', upgrades.conversions.engine || 'Stock'],
    ['Drivetrain', driveType || 'Stock'],
  ];
  if (upgrades.conversions.aspiration) {
    body.push(['Aspiration', upgrades.conversions.aspiration || 'Stock']);
  }
  if (upgrades.conversions.aspiration) {
    body.push(['Body Kit', upgrades.conversions.bodyKit || 'Stock']);
  }
  return formatTable(headers, body);
}

function formatTireUpgrades(upgrades: PerformanceUpgrades): string[] {
  return formatTable(
    ['Tires', ''],
    [
      ['Compound', upgrades.tires.compound],
      ['Tire Width', `Front ${upgrades.tires.width.front} mm, Rear ${upgrades.tires.width.rear} mm`],
      ['Track Width', `Front ${upgrades.tires.trackWidth.front}, Rear ${upgrades.tires.trackWidth.rear}`],
    ],
    false,
    TextAlign.left,
  );
}

function formatWheelUpgrades(upgrades: PerformanceUpgrades): string[] {
  return formatTable(
    ['Wheels', ''],
    [
      ['Style', `${upgrades.wheels.style} ${upgrades.wheels.style}`],
      ['Size', `Front ${upgrades.wheels.size.front} in, Rear ${upgrades.wheels.size.rear} in`],
    ],
    false,
    TextAlign.left,
  );
}

function formatAeroBuild(upgrades: PerformanceUpgrades): string[] {
  const aero: string[][] = [];
  if (upgrades.aeroAndAppearance.frontBumper) {
    aero.push(['Front Bumper', upgrades.aeroAndAppearance.frontBumper]);
  }
  if (upgrades.aeroAndAppearance.rearBumper) {
    aero.push(['Rear Bumper', upgrades.aeroAndAppearance.rearBumper]);
  }
  if (upgrades.aeroAndAppearance.rearWing) {
    aero.push(['Rear Wing', upgrades.aeroAndAppearance.rearWing]);
  }
  if (upgrades.aeroAndAppearance.sideSkirts) {
    aero.push(['Side Skirts', upgrades.aeroAndAppearance.sideSkirts]);
  }
  if (upgrades.aeroAndAppearance.hood) {
    aero.push(['Hood', upgrades.aeroAndAppearance.hood]);
  }

  if (aero.length === 0) return [];

  return formatTable(['Aero and Appearance', ''], aero, false, TextAlign.left);
}

function formatUpgradesSection<T extends object>(section: T) {
  const keys = Object.keys(section);
  return keys
    .filter((key) => {
      const value = section[key as keyof T];
      return value && value.toString() !== 'N/A';
    })
    .map((key) => [capitalCase(key), section[key as keyof T]]);
}

export function formatUpgrades(upgrades: PerformanceUpgrades, driveType: DriveType): string[] {
  const text = [
    ...formatConversions(upgrades, driveType),
    ...formatTable(['Engine', ''], formatUpgradesSection(upgrades.engine), false, TextAlign.left),
    ...formatTable(['Platform And Handling', ''], formatUpgradesSection(upgrades.platformAndHandling), false, TextAlign.left),
    ...formatTable(['Drivetrain', ''], formatUpgradesSection(upgrades.drivetrain), false, TextAlign.left),
    ...formatTireUpgrades(upgrades),
    ...formatWheelUpgrades(upgrades),
    ...formatAeroBuild(upgrades),
  ];

  return text;
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

function formatStatisticsTable(form: FMSetup, globalUnits: 'Metric' | 'Imperial') {
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

export default function useFMRedditMarkdownGenerator(form: FMSetup, globalUnit: Ref<'Metric' | 'Imperial'>) {
  const route = useRoute();
  const linkUrl = computed(() => `https://optn.club${route.fullPath}`);

  const markdown = computed(() => [
    ...formatStatisticsTable(form, globalUnit.value),
    `[View this tune on optn.club](${linkUrl.value})\n`,
    '---\n',
    '## Build\n',
    ...formatUpgrades(form.upgrades, form.upgrades.conversions.drivetrain),
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
