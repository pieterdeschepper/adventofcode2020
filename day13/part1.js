const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");

let timestamp = parseInt(input[0]);
let busses = input[1].split(",").filter((x) => x != "x").map((x) => parseInt(x));

let bestBus, minTime = Infinity;

for (let bus of busses) {
    let waitTime = bus- (timestamp % bus);
    if (waitTime < minTime) {
        bestBus = bus;
        minTime = waitTime;
    }
}

console.log("Solution", bestBus * minTime);