const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");

let j = 0;
let cnt = 0;
for (let i=1;i<input.length;i++) {
    j = (j+3) % input[0].length;
    if(input[i].charAt(j) == "#") cnt++;
}

console.log("Solution: ", cnt);