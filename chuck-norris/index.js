/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/ 
console.log(
    readline()
        .split('')
        .map(char => parseInt(char.charCodeAt(0), 10).toString(2).padStart(7, '0'))
        .join('')
        .match(/(\d)\1*/g)
        .map(char => (char[0] === '1' ? '0 ' : '00 ') + '0'.repeat(char.length))
        .join(' ')
);
