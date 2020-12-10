const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");

let max = 0;
for (let pass of input) {
    let row = parseInt(pass.substr(0,7).replace(/F/g, '0').replace(/B/g, '1'),2);
    let column = parseInt(pass.substr(7,3).replace(/L/g, '0').replace(/R/g, '1'),2);

    let check = row*8+column;
    if (check > max) {
        max=check;
    }
}

console.log("Solution:", max);