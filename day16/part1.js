const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n\n");

let categories = {};
for (let line of input[0].split("\n")) {
    let matches = /([a-z ]+): ([0-9]+)-([0-9]+) or ([0-9]+)-([0-9]+)/g.exec(line);
    categories[matches[1]] = [[matches[2]*1, matches[3]*1],[matches[4]*1, matches[5]*1]];
}

let myTicket = input[1].split("\n")[1].split(",").map(a=>a*1);

let nearbyTickets = [];

for (let line of input[2].split("\n").splice(1)) {
    nearbyTickets.push(line.split(",").map(a=>a*1));
}

let errorRate = 0;
for (let ticket of nearbyTickets) {
    for (let number of ticket) {
        let valid = false;
        loop:
        for (const [category, ranges] of Object.entries(categories)) {
            for (let range of ranges) {
                if (number >= range[0] && number <= range[1]) {
                    valid = true;
                    break loop;
                }
            }
        }
        if (!valid) {
            errorRate += number;
        }
    }
}

console.log("Solution:", errorRate);