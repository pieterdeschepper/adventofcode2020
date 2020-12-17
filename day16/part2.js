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

let validTickets = [];
for (let ticket of nearbyTickets) {
    let isValidTicket = true;
    loop1:
    for (let number of ticket) {
        let valid = false;
        loop2:
            for (const [category, ranges] of Object.entries(categories)) {
                for (let range of ranges) {
                    if (number >= range[0] && number <= range[1]) {
                        valid = true;
                        break loop2;
                    }
                }
            }
        if (!valid) {
            isValidTicket = false;
            break loop1;
        }
    }
    if (isValidTicket) {
        validTickets.push(ticket);
    }
}

let fields = [];
for (const [category, ranges] of Object.entries(categories)) {
    for (let i = 0; i < Object.keys(categories).length; i++) {
        if (!fields[i]) fields[i] = [];
        let isPossible = true;
        loop1:
        for (let ticket of validTickets) {
            let valid = false;
            loop2:
            for (let range of ranges) {
                if (ticket[i] >= range[0] && ticket[i] <= range[1]) {
                    valid = true;
                    break loop2;
                }
            }
            if (!valid) {
                isPossible = false;
                break loop1;
            }
        }

        if (isPossible) {
            fields[i].push(category);
        }
    }
}

let correctFields = [];

let count = 0;
while (count < Object.keys(categories).length) {
    for (const index in fields) {
        let field = fields[index];
        if (field.length == 1) {
            correctFields[index] = field[0];
            for (let i = 0; i < fields.length; i++) {
                for (let j = fields[i].length-1; j >= 0 ;j--) {
                    if (fields[i][j] == correctFields[index]) {
                        fields[i].splice(j,1);
                    }
                }
            }
            count++;
        }
    }
}

let result = 1;

for (let i = 0; i<correctFields.length;i++) {
    if (correctFields[i].indexOf('departure') == 0) {
        result *= myTicket[i];
    }
}

console.log("Solution:", result);