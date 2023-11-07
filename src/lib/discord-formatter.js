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
    let table = createRow(headers)
    table += "\n"
    let divider = "="
    for (let i = 0; i < headers.length; i++) {

        for (let count = 0; count < 23; count++) {
            divider += "="        
        }
    }
    table += divider
    table += "\n"
    for (let i = 0; i < body.length; i++) {
        const row = body[i];
        table += createRow(row) 
    table += "\n"
}
    return table
}

function padString(value, totalLength){
    let numSpaces = totalLength - value.length
    for (let count = 0; count < numSpaces; count++) {
        value +=" "        
    }
    return value
}
padString("length", 10)
const sampleHeaders = ['Fuel and Air', 'Upgrade', 'Number']
const sampleTable = [
//           0              1
/* 0 */    ['Exhaust',    'Sport', '000'], 
/* 1 */    ['Air Filter', 'Stock', '333'],
]

function createRow(row) { // row is an array: 
    // Should output:
    // Fuel and Air | Upgrade | Number
    let output = "| "
    for (let i = 0; i < row.length; i++) {
        const strValue = row[i];
        const padded = padString(strValue, 20)
        output += `${padded} | `
    }
    
    return output
}

// logRow(sampleHeaders);
const formated = createTable(sampleHeaders, sampleTable)
console.log(formated)