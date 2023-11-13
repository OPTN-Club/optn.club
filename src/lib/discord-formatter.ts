/*
Fuel and Air    | Upgrade    | Number
=====================================
Exhaust         | Sport      | 893
Air Filter      | Stock      | 333

First step output:

Fuel and Air | Upgrade | Number
Exhaust | Sport | 893
Air Filter | Stock | 333
*/
export default function createTable(headers: string[], body: string[][]) {
  let table = createRow(headers);
  table += '\n';
  let divider = '=';
  for (let i = 0; i < headers.length; i++) {
    for (let count = 0; count < 23; count++) {
      divider += '=';
    }
  }
  table += divider;
  table += '\n';
  for (let i = 0; i < body.length; i++) {
    const row = body[i];
    table += createRow(row);
    table += '\n';
  }
  return table;
}

function createRow(row: string[]) { // row is an array:
  // Should output:
  // Fuel and Air | Upgrade | Number
  let output = '| ';
  for (let i = 0; i < row.length; i++) {
    const strValue = row[i];
    const padded = padString(strValue, 20);
    output += `${padded} | `;
  }

  return output;
}

function padString(value: string, totalLength: number) {
  let padded = value;
  const numSpaces = totalLength - value.length;
  for (let count = 0; count < numSpaces; count++) {
    padded += ' ';
  }
  return padded;
}
