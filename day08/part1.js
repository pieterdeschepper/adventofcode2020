const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");

let instructions = [];

for (instruction of input) {
    let fn = instruction.substr(0,3);
    let arg = parseInt(instruction.substr(4));
    instructions.push({fn, arg});
}

let acc = 0;
let positions = [];
let position = 0;

while (positions.indexOf(position) == -1) {
    positions.push(position);
    let instr = instructions[position];
    switch (instr.fn) {
        case 'acc':
            acc += instr.arg;
            position++;
            break;
        case 'jmp':
            position += instr.arg;
            break;
        case 'nop':
            position++;
    }
}

console.log("Solution:", acc);