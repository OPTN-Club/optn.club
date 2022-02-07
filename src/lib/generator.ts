import { convertPressure } from './conversions';
import { BuildSettings, FrontAndRearSettings, FrontAndRearWithUnits, PressureUnit, TuneSettings } from './types';
import { ensureArray, suffix } from './utils';

interface TableRow {
  label: string;
  values: string[];
}

function createTableRow(row: string[]) {
  return `|${row.join('|')}|`;
}

export function formatTable(title: string, subtitle: string, body: TableRow[]): string[] {
  const header = [title, subtitle];
  const rowSeparator = [':--', '--:'];

  let columnCount = 2;
  const bodyRows = body.map((row) => {
    const tableRow = [row.label].concat(row.values);
    columnCount = Math.max(columnCount, tableRow.length);
    return createTableRow(tableRow);
  });

  for (let index = 2; index < columnCount; index++) {
    header.push('&nbsp;');
    rowSeparator.push('--:');
  }

  return [
    createTableRow(header),
    createTableRow(rowSeparator),
    ...bodyRows,
    '\n&nbsp;',
  ];
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

// export function formatBuild(build: BuildSettings): string[] {

// }

function formatGears(tune: TuneSettings): TableRow[] {
  const rows: TableRow[] = [{ label: 'Final Drive', values: [tune.gears[0]] }];
  for (let index = 1; index < tune.gears.length; index++) {
    const value = tune.gears[index];
    if (value) {
      rows.push({ label: `${index}${suffix(index)}`, values: [value] });
    }
  }

  return rows;
}

export function formatTune(tune: TuneSettings): string[] {
  return [
    ...formatTable('Tires', 'Pressure', [
      { label: 'Front', values: formatPressure(tune.tires.front, tune.tires.units) },
      { label: 'Rear', values: formatPressure(tune.tires.rear, tune.tires.units) },
    ]),
    ...formatTable('Gears', 'Ratio', formatGears(tune)),
    ...formatFrontRear('Alignment', 'Camber', tune.camber, '°'),
    ...formatFrontRear('Alignment', 'Toe', tune.toe, '°'),
    ...formatTable('Alignment', 'Caster', [{ label: 'Front', values: [tune.caster] }]),
  ];
}


// function generateText() {
//   const lines = [];
//   lines.push('Alignment | Camber');
//   lines.push(':--|--:');
//   lines.push(`Front | ${camber[0].value}°`);
//   lines.push(`Rear | ${camber[1].value}°`);
//   lines.push('\n');

//   lines.push('Alignment | Toe');
//   lines.push(':--|--:');
//   lines.push(`Front | ${toe[0].value}°`);
//   lines.push(`Rear | ${toe[1].value}°`);
//   lines.push('\n');


//   lines.push('Alignment | Caster');
//   lines.push(':--|--:');
//   lines.push(`Front Caster | ${caster[0].value}`);
//   lines.push('\n');

//   lines.push('Antiroll Bars | Stiffness');
//   lines.push(':--|--:');
//   lines.push(`Front | ${antirollBars[0].value}`);
//   lines.push(`Rear | ${antirollBars[1].value}`);
//   lines.push('\n');

//   lines.push('Springs | Tension');
//   lines.push(':--|--:');
//   lines.push(`Front | ${springTension[0].value} ${springsUnit}`);
//   lines.push(`Rear | ${springTension[1].value} ${springsUnit}`);
//   lines.push('\n');

//   lines.push('Springs | Ride Height');
//   lines.push(':--|--:');
//   lines.push(`Front | ${rideHeight[0].value} ${rideheightUnit}`);
//   lines.push(`Rear | ${rideHeight[1].value} ${rideheightUnit}`);
//   lines.push('\n');

//   lines.push('Damping | Rebound Stiffness');
//   lines.push(':--|--:');
//   lines.push(`Front | ${reboundStiffness[0].value}`);
//   lines.push(`Rear | ${reboundStiffness[1].value}`);
//   lines.push('\n');

//   lines.push('Damping | Bump Stiffness');
//   lines.push(':--|--:');
//   lines.push(`Front | ${bumpStiffness[0].value}`);
//   lines.push(`Rear | ${bumpStiffness[1].value}`);
//   lines.push('\n');

//   if (aero[0].value !== "" && aero[1].value !== "") {
//     lines.push('Aero | Downforce');
//     lines.push(':--|--:');
//     if (aero[0].value !== "") {
//       lines.push(`Front | ${aero[0].value} ${downforceUnit}`);
//     }
//     if (aero[1].value !== "") {
//       lines.push(`Rear | ${aero[1].value} ${downforceUnit}`);
//     }
//     lines.push('\n');
//   }
//   if (brake[0].value !== "" && brake[1].value !== "") {
//     lines.push('Brake | %');
//     lines.push(':--|--:');
//     lines.push(`Balance | ${brake[0].value}%`);
//     lines.push(`Pressure | ${brake[1].value}%`);
//     lines.push('\n');
//   } else {
//     lines.push('Brake | %');
//     lines.push(':--|--:');
//     lines.push(`Balance | N/A`);
//     lines.push(`Pressure | N/A`);
//     lines.push('\n');
//   }
//   if (differential[0].value !== "" || differential[1].value !== "") {
//     lines.push('Differential | Front');
//     lines.push(':--|--:');
//     lines.push(`Acceleration | ${differential[0].value}%`);
//     lines.push(`Deceleration | ${differential[1].value}%`);
//     lines.push('\n');
//   }
//   if (differential[2].value !== "" || differential[3].value !== "") {
//     lines.push('Differential | Rear');
//     lines.push(':--|--:');
//     lines.push(`Acceleration | ${differential[2].value}%`);
//     lines.push(`Deceleration | ${differential[3].value}%`);
//     lines.push('\n');
//   }

//   if (differential[0].value !== "" && differential[1].value !== "" &&
//     differential[2].value !== "" && differential[3].value !== "") {
//     lines.push('Differential | Center');
//     lines.push(':--|--:');
//     lines.push(`Balance | ${differential[4].value}%`);
//     lines.push('\n');
//   }
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
