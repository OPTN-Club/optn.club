import { byFullname } from './models';
import {
  BuildSettings,
  ForceUnit,
  FrontAndRearSettings,
  FrontAndRearWithUnits,
  SettingsForm,
  TuneSettings,
  Car,
  DriveType,
  Upgrade,
} from './types';
import { addSuffix as suffixize, formatFloat } from './utils';
import { formatForce, formatUnit } from './unitsOfMeasure';

function FormatTableRow(row: string[]) {
  return `|${row.join('|')}|`;
}

export function formatTable(header: string[], body: string[][]): string[] {
  const rowSeparator = [':--', '--:'];
  for (let index = 2; index < header.length; index++) {
    rowSeparator.push('--:');
  }
  return [
    FormatTableRow(header),
    FormatTableRow(rowSeparator),
    ...body.map((row) => FormatTableRow(row)),
    '\n&nbsp;\n',
  ];
}

function formatFrontRear(headers: string[], value: FrontAndRearSettings, precision = 1, suffix = ''): string[] {
  const body: string[][] = [
    ['Front', formatFloat(value.front, precision, suffix)],
    ['Rear', formatFloat(value.rear, precision, suffix)],
  ];

  return formatTable(headers, body);
}

function formatFrontRearWithUnit(headers: string[], value: FrontAndRearWithUnits, precision = 1): string[] {
  const body: string[][] = [
    ['Front', ...formatUnit(value.front, value.units, precision)],
    ['Rear', ...formatUnit(value.rear, value.units, precision)],
  ];

  return formatTable(headers, body);
}

function formatTires(tune: TuneSettings): string[] {
  return [
    '###Tires\n',
    ...formatFrontRearWithUnit(['Pressure', '', ''], tune.tires, 1),
  ];
}

function formatGears(tune: TuneSettings): string[] {
  const precision = 2;
  const headers = ['Gears', 'Ratio'];
  const body: string[][] = [
    ['Final Drive', parseFloat(tune.gears[0]).toFixed(precision)],
  ];
  for (let index = 1; index < tune.gears.length; index++) {
    const value = parseFloat(tune.gears[index]);
    if (!value) break;
    body.push([`${index}${suffixize(index)}`, value.toFixed(precision)]);
  }

  if (body.length === 1 && tune.gears[0] === '') return [];

  return formatTable(headers, body);
}

function formatAlignment(tune: TuneSettings): string[] {
  return [
    '###Alignment\n',
    ...formatFrontRear(['Camber', ''], tune.camber, 1, '°'),
    ...formatFrontRear(['Toe', ''], tune.toe, 1, '°'),
    ...formatTable(['Caster', ''], [['Front', formatFloat(tune.caster, 1, '')]]),
  ];
}

function formatAntiRollbars(tune: TuneSettings): string[] {
  return [
    '###Antiroll Bars\n',
    ...formatFrontRear(['Stiffness', ''], tune.arb),
  ];
}

function formatSprings(tune: TuneSettings): string[] {
  return [
    '###Springs\n',
    ...formatFrontRearWithUnit(['Tension', '', '', ''], tune.springs, 1),
    ...formatFrontRearWithUnit(['Ride Height', '', ''], tune.rideHeight, 1),
  ];
}

function formatDamping(tune: TuneSettings): string[] {
  return [
    '###Damping\n',
    ...formatFrontRear(['Rebound', 'Stiffness'], tune.damping),
    ...formatFrontRear(['Bump', 'Stiffness'], tune.bump),
  ];
}

function formatAero(tune: TuneSettings): string[] {
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
  return [
    '###Aero\n',
    ...formatTable(['Downforce', '', '', ''], [front, rear]),
  ];
}

function formatBrakes(tune: TuneSettings): string[] {
  return [
    '###Brakes\n',
    ...formatTable(['', '%'], [
      ['Balance', formatFloat(tune.brake.bias, 0, '%')],
      ['Pressure', formatFloat(tune.brake.pressure, 0, '%')],
    ]),
  ];
}

function isDrivetrain(value: string): value is DriveType {
  return Object.values(DriveType).includes(value as DriveType);
}

export function getDrivetrain(build: BuildSettings, stockDriveType: string): DriveType {
  // return build.conversions.drivetrain || (stockDriveType);
  if (build.conversions.drivetrain) {
    return build.conversions.drivetrain;
  }
  if (isDrivetrain(stockDriveType)) {
    return stockDriveType;
  }
  return DriveType.awd;
}

function formatDifferential(form: SettingsForm, car: Car): string[] {
  const drivetrain = getDrivetrain(form.build, car.drive);
  const header = ['', 'Acceleration', 'Deceleration'];
  const front = ['Front', 'N/A', 'N/A'];
  const rear = ['Rear', 'N/A', 'N/A'];
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

  const table = [
    '###Differential\n',
    ...formatTable(header, body),
  ];

  if (drivetrain === DriveType.awd) {
    table.push(...formatTable(
      ['Center', ''],
      [['Balance', formatFloat(form.tune.diff.center, 0, '%')]],
    ));
  }
  return table;
}

export function formatTune(form: SettingsForm, model: string): string[] {
  const car = byFullname[model];
  const text = [
    ...formatTires(form.tune),
    ...formatGears(form.tune),
    ...formatAlignment(form.tune),
    ...formatAntiRollbars(form.tune),
    ...formatSprings(form.tune),
    ...formatDamping(form.tune),
    ...formatAero(form.tune),
    ...formatBrakes(form.tune),
    ...formatDifferential(form, car),
  ];

  return text;
}

function formatConversions(build: BuildSettings): string[] {
  const headers = ['Conversions', ''];
  const body = [
    ['Engine', build.conversions.engine || 'Stock'],
    ['Drivetrain', build.conversions.drivetrain || 'Stock'],
  ];
  if (build.conversions.aspiration) {
    body.push(['Aspiration', build.conversions.aspiration || 'Stock']);
  }
  if (build.conversions.aspiration) {
    body.push(['Body Kit', build.conversions.bodyKit || 'Stock']);
  }
  return formatTable(headers, body);
}

export function formatBuild(build: BuildSettings): string[] {
  const text = [
    ...formatConversions(build),
    ...formatTable(['Engine', ''], [
      ['Intake', build.engine.intake],
      ['Fuel System', build.engine.fuelSystem],
      ['Ignition', build.engine.ignition],
      ['Exhaust', build.engine.exhaust],
      ['Camshaft', build.engine.camshaft],
      ['Valves', build.engine.valves],
      ['Displacement', build.engine.displacement],
      ['Pistons', build.engine.pistons],
      ['Turbo', build.engine.turbo],
      ['Twin Turbo', build.engine.twinTurbo],
      ['Supercharger', build.engine.supercharger],
      ['Centrifigul Supercharger', build.engine.centrifigulSupercharger],
      ['Intercooler', build.engine.intercooler],
      ['Oil Cooling', build.engine.oilCooling],
      ['Flywheel', build.engine.flywheel],
    ].filter((v) => v[1] !== Upgrade.na)),
    ...formatTable(['Platform And Handling', ''], [
      ['Brakes', build.platformAndHandling.brakes],
      ['Springs', build.platformAndHandling.springs],
      ['Front Arb', build.platformAndHandling.frontArb],
      ['Rear Arb', build.platformAndHandling.rearArb],
      ['Chassis Reinforcement', build.platformAndHandling.chassisReinforcement],
      ['Weight Reduction', build.platformAndHandling.weightReduction],
    ]),
    ...formatTable(['Drivetrain', ''], [
      ['Clutch', build.drivetrain.clutch],
      ['Transmission', build.drivetrain.transmission],
      ['Driveline', build.drivetrain.driveline],
      ['Differential', build.drivetrain.differential],
    ]),
    ...formatTable(['Tires And Rims', ''], [
      ['Compound', build.tiresAndRims.compound],
      ['Width', `Front ${build.tiresAndRims.width.front} mm, Rear ${build.tiresAndRims.width.rear} mm`],
      ['Rim Style', `${build.tiresAndRims.rimStyle.type} ${build.tiresAndRims.rimStyle.name}`],
      ['Rim Size', `Front ${build.tiresAndRims.rimSize.front} in, Rear ${build.tiresAndRims.rimSize.rear} in`],
    ]),
  ];

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
  if (aero.length) text.push(...formatTable(['Aero and Appearance', ''], aero));

  return text;
}

export function generateRedditMarkdown(form: SettingsForm) {
  if (!form.model) {
    return 'A Make and Model must be selected before output can be generated';
  }
  return [
    `#${form.model}\n`,
    '##Build\n',
    ...formatBuild(form.build),
    '---\n',
    '##Tune\n',
    ...formatTune(form, form.model),
    '---\n',
    'Formatted text generated by the [Forza Open Tunes Formatter](https://ldalvik.github.io/ForzaOpenTuneFormatter/)\n',
    'Submit bugs, feature requests, and questions on [Github](https://github.com/Ldalvik/ForzaOpenTuneFormatter/issues)',
  ].join('\n');
}
