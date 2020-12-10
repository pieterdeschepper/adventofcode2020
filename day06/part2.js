const fs = require('fs');

let input = fs.readFileSync('input.txt').toString().split("\n\n");
input = input.map(x => x.replace(/\n/g, " "));

let sum = 0;
for (let group of input) {
    let answers = group.split(" ");
    let yesses = {};
    for (answer of answers) {
        for(i=0;i<answer.length;i++) {
            let letter= answer.charAt(i);
            yesses[letter] = yesses[letter] ? yesses[letter] + 1 : 1;
        }
    }
    for(let yes in yesses) {
        if (yesses[yes] == answers.length) sum++;
    }
}

console.log("Solution", sum);

