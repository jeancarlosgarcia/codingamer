/**
Mario is marching to the castle to save the princess. In the last phase he has to jump over a number of pillars of different heights. When Mario jumps from a lower pillar to a higher pillar, he has to use High Jump. When he jumps to a pillar of lower or same height, he has to use Low Jump.
Your task is to find out how many High Jumps and Low Jumps Mario has to do.
 **/

const N = parseInt(readline());
var inputs = readline().split(' ');
let L = 0;
let H = 0;
let first = true;
let p =0;;
for (let i = 0; i < N; i++) {
    const S = parseInt(inputs[i]);
    if(first){
        first = false;
        p = S;
        continue;
    }
    
    if(p >= S) {
        L++;
    } else {
        H++;
    }
    p = S;
}

console.log(`${H} ${L}`)
