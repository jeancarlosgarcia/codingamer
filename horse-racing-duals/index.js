/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
const horses = [];
for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    horses.push(pi);
}


let closest = Infinity;
const horseOrder = horses.sort((a, b) => a - b);

for(let j = 0; j < N; j++){
    if(horseOrder[j+1] === undefined) continue;
    const d = horseOrder[j+1] - horseOrder[j];
    if(d < closest) closest = d;
}

// Write an action using console.log()
// To debug: console.error('Debug messages...');

console.log(closest);
