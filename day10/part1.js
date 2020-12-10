const fs = require('fs');

let input = fs.readFileSync('input.txt').toString().split("\n");

input = input.map((r) => r*1);

input.sort((a, b) => a-b);
input.unshift(0);

const diffs = [0,0,1];

for (i=0;i<input.length-1;i++) {
    diffs[(input[i+1]-input[i]-1)]++;
}

console.log("Solution:", diffs[0] * diffs[2]);