const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");

let relations = [];
for (let i =0;i<input.length; i++) {
    let description = input[i];
    let matches = /^(.*) bags contain (.*)$/g.exec(description);
    let baseColour = matches[1];
    let includes = matches[2].split(',');
    for (let include of includes) {
        let m = /([0-9]{1}) ([a-z ]+?) bag[s]?[.]?$/g.exec(include);
        if(m != null){
            let amount = m[1]*1;
            let colour = m[2];
            if (relations[baseColour]) {
                relations[baseColour].push({colour, amount});
            } else {
                relations[baseColour] = [{colour, amount}];
            }
        }
    }
}

function getBags(toFind) {
    let result = 0;
    if (relations[toFind]) {
        for (let relation of relations[toFind]) {
            result+=relation.amount;
            result+=relation.amount*getBags(relation.colour);
        }
    }
    return result;
}

const toFind = "shiny gold";
const nrOfBags = getBags(toFind);
console.log("Solution:", nrOfBags);

