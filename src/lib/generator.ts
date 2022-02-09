import { convertForce, convertLength, convertPressure } from './conversions';
import { byFullname } from './models';
import {
  BuildSettings,
  ForceUnit,
  FrontAndRearSettings,
  FrontAndRearWithUnits,
  LengthUnit,
  PressureUnit,
  SettingsForm,
  TuneSettings,
  Car,
} from './types';
import { ensureArray, suffix as suffixize } from './utils';

interface TableRow {
  label: string;
  values: string[];
}

function createTableRow(row: string[]) {
  return `|${row.join('|')}|`;
}

export function formatTableArray(header: string[], body: string[][]): string[] {
  const rowSeparator = [':--', '--:'];
  for (let index = 2; index < header.length; index++) {
    rowSeparator.push('--:');
  }
  return [
    createTableRow(header),
    createTableRow(rowSeparator),
    ...body.map((row) => createTableRow(row)),
    '\n&nbsp;',
  ];
}

export function formatTable(title: string, subtitle: string, body: TableRow[]): string[] {
  const header = [title, subtitle];
  const rowSeparator = [':--', '--:'];

  let columnCount = 2;
  const bodyRows = body.map((row) => {
    const tableRow = [row.label].concat(row.values);
    columnCount = Math.max(columnCount, tableRow.length);
    return tableRow;
  });

  for (let index = 2; index < columnCount; index++) {
    header.push('&nbsp;');
  }

  return formatTableArray(header, bodyRows);
}

export function formatFrontRear(title: string, subtitle: string, value: FrontAndRearSettings, suffix = ''): string[] {
  const body: TableRow[] = [
    { label: 'Front', values: [`${value.front}${suffix}`] },
    { label: 'Rear', values: [`${value.rear}${suffix}`] },
  ];

  return formatTable(title, subtitle, body);
}

export function formatFrontRearaaa(title: string, subtitle: string, value: FrontAndRearSettings | FrontAndRearSettings[], suffix = ''): string[] {
  const body: TableRow[] = [
    { label: 'Front', values: [] },
    { label: 'Rear', values: [] },
  ];

  ensureArray(value).forEach((setting) => {
    body[0].values.push(`${setting.front}${suffix}`);
    body[1].values.push(`${setting.rear}${suffix}`);
  });

  return formatTable(title, subtitle, body);
  // return formatTable(title, subtitle, [
  //   { label: 'Front', values: `${value.front} ${suffix}`.trim() },
  //   { label: 'Rear', values: `${value.rear} ${suffix}`.trim() },
  // ]);
}

// export function formatFrontRearWithUnit(title: string, subtitle: string, value: FrontAndRearWithUnits, suffix = ''): string[] {
//   return formatTable(title, subtitle, [
//     { label: 'Front', values: `${value.front} ${suffix}`.trim() },
//     { label: 'Rear', values: `${value.rear} ${suffix}`.trim() },
//   ]);
function formatPressure(pressure: string, unit: PressureUnit) {
  const p = parseFloat(pressure).toFixed(1);
  const c = convertPressure(pressure, unit).toFixed(1);
  if (unit === PressureUnit.bar) {
    return [
      `${p} bar`,
      `${c} psi`,
    ];
  }
  return [
    `${p} psi`,
    `${c} bar`,
  ];
}

function formatForce(force: string, unit: ForceUnit) {
  const f = parseFloat(force).toFixed(1);
  if (unit === ForceUnit.kgf) {
    return [
      `${f} kgf/mm`,
      `${convertForce(f, unit, ForceUnit.lbs)} lbs/in`,
      `${convertForce(f, unit, ForceUnit.nmm)} n/mm`,
    ];
  }
  if (unit === ForceUnit.lbs) {
    return [
      `${f} lbs/in`,
      `${convertForce(f, unit, ForceUnit.kgf)} kgf/mm`,
      `${convertForce(f, unit, ForceUnit.nmm)} n/mm`,
    ];
  }
  return [
    `${f} ${ForceUnit.nmm}`,
    `${convertForce(f, unit, ForceUnit.lbs)} lbs/in`,
    `${convertForce(f, unit, ForceUnit.kgf)} kgf/mm`,
  ];
}

function formatLength(length: string, unit: LengthUnit) {
  const l = parseFloat(length).toFixed(1);
  const c = convertLength(length, unit);
  if (unit === LengthUnit.cm) {
    return [
      `${l} cm`,
      `${c} in`,
    ];
  }
  return [
    `${l} in`,
    `${c} cm`,
  ];
}

function formatAero(aero: FrontAndRearWithUnits<ForceUnit>): TableRow[] {
  const front: TableRow = { label: 'Front', values: [] };
  const rear: TableRow = { label: 'Front', values: [] };
  if (aero.front === '') {
    front.values.push('N/A', '', '');
  } else {
    front.values = formatForce(aero.front, aero.units);
  }
  if (aero.rear === '') {
    rear.values.push('N/A', '', '');
  } else {
    rear.values = formatForce(aero.rear, aero.units);
  }
  return [front, rear];
}

function formatGears(tune: TuneSettings): TableRow[] {
  const rows: TableRow[] = [{ label: 'Final Drive', values: [tune.gears[0]] }];
  for (let index = 1; index < tune.gears.length; index++) {
    const value = tune.gears[index];
    if (value) {
      rows.push({ label: `${index}${suffixize(index)}`, values: [value] });
    }
  }

  return rows;
}

function formatDifferential(tune: TuneSettings, car: Car): string[] {
  const header = ['Differential', 'Acceleration', 'Deceleration'];
  const front = ['Front', 'N/A', 'N/A'];
  const rear = ['Rear', 'N/A', 'N/A'];
  const body: string[][] = [];
  if (['fwd', 'awd'].includes(car.drive.toLowerCase())) {
    body.push(front);
    front[1] = `${tune.diff.front.accel}%`;
    front[2] = `${tune.diff.front.decel}%`;
  }
  if (['rwd', 'awd'].includes(car.drive.toLowerCase())) {
    body.push(rear);
    rear[1] = `${tune.diff.rear.accel}%`;
    rear[2] = `${tune.diff.rear.decel}%`;
  }

  const table = formatTableArray(header, body);

  if (car.drive.toLowerCase() === 'awd') {
    table.push(...formatTableArray(
      ['Differential', 'Center'],
      [['Balance', `${tune.diff.center}%`]],
    ));
  }
  return table;
}

export function formatTune(tune: TuneSettings, model: string): string[] {
  const car = byFullname[model];
  const text = [
    ...formatTable('Tires', 'Pressure', [
      { label: 'Front', values: formatPressure(tune.tires.front, tune.tires.units) },
      { label: 'Rear', values: formatPressure(tune.tires.rear, tune.tires.units) },
    ]),
    ...formatTable('Gears', 'Ratio', formatGears(tune)),
    ...formatFrontRear('Alignment', 'Camber', tune.camber, '°'),
    ...formatFrontRear('Alignment', 'Toe', tune.toe, '°'),
    ...formatTable('Alignment', 'Caster', [{ label: 'Front', values: [tune.caster] }]),
    ...formatFrontRear('Antiroll Bars', 'Stiffness', tune.arb),
    ...formatTable('Springs', 'Tension', [
      { label: 'Front', values: formatForce(tune.springs.front, tune.springs.units) },
      { label: 'Rear', values: formatForce(tune.springs.rear, tune.springs.units) },
    ]),
    ...formatTable('Springs', 'Ride Height', [
      { label: 'Front', values: formatLength(tune.rideHeight.front, tune.rideHeight.units) },
      { label: 'Rear', values: formatLength(tune.rideHeight.rear, tune.rideHeight.units) },
    ]),
    ...formatFrontRear('Damping', 'Rebound Stiffness', tune.damping),
    ...formatFrontRear('Damping', 'Bump Stiffness', tune.bump),
    ...formatTable('Aero', 'Downforce', formatAero(tune.aero)),
    ...formatTable('Brake', '%', [
      { label: 'Balance', values: [`${tune.brake.bias}%`] },
      { label: 'Balance', values: [`${tune.brake.pressure}%`] },
    ]),
    ...formatDifferential(tune, car),
  ];

  return text;
}

export function formatBuild(build: BuildSettings): string[] {
  const text = [
    ...formatTableArray(['Conversions', ''], [
      ['Engine', build.conversions.engine],
      ['Drivetrain', build.conversions.drivetrain],
      ['Aspiration', build.conversions.aspiration],
      ['Body Kit', build.conversions.bodyKit],
    ]),
    ...formatTableArray(['Engine', ''], [
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
    ]),
    ...formatTableArray(['Platform And Handling', ''], [
      ['Brakes', build.platformAndHandling.brakes],
      ['Springs', build.platformAndHandling.springs],
      ['Front Arb', build.platformAndHandling.frontArb],
      ['Rear Arb', build.platformAndHandling.rearArb],
      ['Chassis Reinforcement', build.platformAndHandling.chassisReinforcement],
      ['Weight Reduction', build.platformAndHandling.weightReduction],
    ]),
    ...formatTableArray(['Drivetrain', ''], [
      ['Clutch', build.drivetrain.clutch],
      ['Transmission', build.drivetrain.transmission],
      ['Driveline', build.drivetrain.driveline],
      ['Differential', build.drivetrain.differential],
    ]),
    ...formatTableArray(['Tires And Rims', ''], [
      ['Compound', build.tiresAndRims.compound],
      ['Width', `Front ${build.tiresAndRims.width.front} mm, Rear ${build.tiresAndRims.width.rear} mm`],
      ['Rim Style', `${build.tiresAndRims.rimStyle.type} ${build.tiresAndRims.rimStyle.name}`],
      ['Rim Size', `Front ${build.tiresAndRims.rimSize.front} in, Rear ${build.tiresAndRims.rimSize.rear} in`],
    ]),
    ...formatTableArray(['Aero And Appearance', ''], [

    ]),
    ...formatTableArray(['Engine', ''], [

    ]),
    ...formatTableArray(['Engine', ''], [

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
  if (aero.length) text.push(...formatTableArray(['Aero and Appearance', ''], aero));

  return text;
}

export function generateRedditMarkdown(form: SettingsForm) {
  return [
    ...formatTune(form.tune, form.model),
    ...formatBuild(form.build),
  ].join('\n');
}

// function generateText() {
//   const lines = [];
//   lines.push('***');
//   lines.push('^Text ^generated ^by ^https://ldalvik.github.io/ForzaOpenTuneFormatter/');
//   lines.push('^If ^you ^have ^any ^questions ^or ^want ^to ^report ^a ^bug, ^please ^DM ^u/hey-im-root ^or ^u/SharpSeeEr');
//   const text = lines.join('\n');
//   result.value = text;
// }

// const form = document.querySelector('form[name=tuningForm]');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   e.stopPropagation();
//   generateText();
//   result.scrollIntoView();
// });
