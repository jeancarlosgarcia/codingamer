/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.
const types = [];

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0]; // file extension
    const MT = inputs[1]; // MIME type.
    types[EXT.toLowerCase()] = MT;
}

for (let i = 0; i < Q; i++) {
    const FNAME = readline(); // One file name per line.
    const FEXT = (FNAME.indexOf('.') !== -1) && /[^.]+$/.exec(FNAME.toLowerCase());
    
    if (FEXT === null) {
        console.log('UNKNOWN');
    } else {  
        const FMIME = types[FEXT[0]];
        console.log(FMIME === undefined ? 'UNKNOWN' : FMIME)
    }
}
