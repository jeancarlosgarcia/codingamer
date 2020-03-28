/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const LON = readline();
const LAT = readline();
const N = parseInt(readline());

const LATA = parseFloat(LAT.replace(',','.'));
const LONA = parseFloat(LON.replace(',','.'));


let minDist = Infinity;
let minName = '';

for (let i = 0; i < N; i++) {
    const DEFIB = readline();
    
    const position = DEFIB.split(';');
    const LATB = parseFloat(position[5].replace(',','.'));
    const LONB = parseFloat(position[4].replace(',','.'));
    
    const x = (LONB - LONA) * Math.cos((LATA + LATB)/2);        
    const y = LATB - LATA;
    const d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371;
   
    if(minDist > d) {
        minDist = d;
        minName = position[1];
    }
}

console.log(minName)
