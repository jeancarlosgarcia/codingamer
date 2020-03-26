/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
const temp = [];

for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    temp.push(t);
}

if(temp.length === 0) {
    return console.log(0);
}

temp.push(0);
const tempOrder = temp.sort((a, b) => a - b);
const tempLenght = tempOrder.length;
const mid = tempOrder.indexOf(0);

if(mid === 0) 
    return console.log(tempOrder[1]);
    
if(mid === tempLenght - 1) 
    return console.log(tempOrder[tempLenght - 2]);
    
if(Math.abs(tempOrder[mid-1]) === tempOrder[mid+1]) 
    return console.log(tempOrder[mid+1]);

if(Math.abs(tempOrder[mid-1]) < tempOrder[mid+1]) 
    return console.log(tempOrder[mid-1])
else 
    return console.log(tempOrder[mid+1])
