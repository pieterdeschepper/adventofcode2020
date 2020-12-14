const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");

let memory = [];
let mask = "";

for (let line of input) {
    [instr, param] = line.split( " = ");
    if (instr == "mask") {
        mask = param;
    } else {
        let pos = instr.substr(4,instr.length-5);
        let value = parseInt(param).toString(2).padStart(36,'0');
        let newValue = "";
        for (i=0;i<mask.length;i++) {
            newValue += mask.charAt(i) == "X" ? value.charAt(i) : mask.charAt(i);
        }

        memory[pos] = parseInt(newValue,2);
    }
}

let sum = memory.filter(x => x!==null).reduce((sum, a) => sum+=a);

console.log("Solution", sum);