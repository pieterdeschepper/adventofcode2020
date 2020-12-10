const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");

let relations = [];
for (let i =0;i<input.length; i++) {
    let description = input[i];
    let matches = /^(.*) bags contain (.*)$/g.exec(description);
    let baseColour = matches[1];
    let includes = matches[2].split(',');
    let leaves = [];
    for (let include of includes) {
        let m = /([0-9]{1}) ([a-z ]+?) bag[s]?[.]?$/g.exec(include);
        if(m != null) {
            let amount = m[1];
            let colour = m[2];
            if (relations[colour]) {
                relations[colour].push(baseColour);
            } else {
                relations[colour] = [baseColour];
            }
        }
    }
}

function getBags(toFind) {
    let result = [];
    if (relations[toFind]) {
        for (let relation of relations[toFind]) {
            result.push(relation);
            let t = getBags(relation);
            result = result.concat(t);
        }
    }
    return result;
}

const toFind = "shiny gold";
const bags = getBags(toFind)
const distinctBags = [...new Set(bags)];
console.log("Solution:", distinctBags.length);