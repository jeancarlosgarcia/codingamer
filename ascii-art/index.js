/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = parseInt(readline());
const H = parseInt(readline());
const T = readline().toLowerCase();

for (let i = 0; i < H; i++) {
    const ROW = readline();
    let str = '';
    
    for (let j = 0; j < T.length; j++) {
        let index = (T[j].charCodeAt(0)-97) * L;
        (index < 0) && (index = 26 * L);
        str += ROW.slice(index, index + L);
    }
    console.log(str);
}
