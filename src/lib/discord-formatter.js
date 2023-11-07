const ary = ['value1', 'value2', 'value3'];


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
function createTable(headers, body) {
    logRow(headers)
    for (let i = 0; i < body.length; i++) {
        const row = body[i];
        // row now equals ['Exhaust',    'Sport']
        logRow(row)
    }
}

const sampleHeaders = ['Fuel and Air', 'Upgrade', 'Number']
const sampleTable = [
//           0              1
/* 0 */    ['Exhaust',    'Sport', '000'], 
/* 1 */    ['Air Filter', 'Stock', '333'],
]

function logRow(row) { // row is an array: 
    // Should output:
    // Fuel and Air | Upgrade | Number
    let output = "| "
    for (let i = 0; i < row.length; i++) {
        const element = row[i];
        output += `${element} | `
    }
    
    console.log(output)
}

// logRow(sampleHeaders);
createTable(sampleHeaders, sampleTable)