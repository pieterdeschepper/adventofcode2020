const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");

let ids= {};
for (let pass of input) {
    let row = parseInt(pass.substr(0,7).replace(/F/g, '0').replace(/B/g, '1'),2);
    let column = parseInt(pass.substr(7,3).replace(/L/g, '0').replace(/R/g, '1'),2);

    let check = row*8+column;
    ids[check] = pass;
}

let keys = Object.keys(ids);
keys.sort((a, b) => a-b);

for (i=1;i<keys.length-1;i++) {
    if(keys[i-1] != keys[i] -1 && keys[i+1] != keys[i] +1 ) console.log("Solution:", keys[i] - 1);
}

