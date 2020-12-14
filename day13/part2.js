const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");

let busses = input[1].split(",").map((x) => parseInt(x));

let period = busses[0];
let timestamp = 0;
for (let i = 1; i < busses.length; i++) {
    if (isNaN(busses[i])) {
        continue;
    }
    while ((timestamp + i) % busses[i] != 0)
    {
        timestamp += period;
    }
    period *= busses[i];
}

console.log("Solution", timestamp);