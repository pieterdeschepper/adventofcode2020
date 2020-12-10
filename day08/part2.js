const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");

let instructions = [];

for (instruction of input) {
    let fn = instruction.substr(0,3);
    let arg = parseInt(instruction.substr(4));
    instructions.push({fn, arg});
}

for (let i = 0; i<instructions.length;i++) {
    let acc = 0;
    let positions = [];
    let position = 0;

    //Switch nop/jmp
    if (instructions[i].fn == "nop") {
        instructions[i].fn = "jmp";
    } else if (instructions[i].fn == "jmp") {
        instructions[i].fn = "nop";
    }

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

        if (position == instructions.length) {
            console.log("Solution:", acc);
            break;
        }
    }

    //Flip jmp/nop back
    if (instructions[i].fn == "jmp") {
        instructions[i].fn = "nop";
    } else if (instructions[i].fn == "nop") {
        instructions[i].fn = "jmp";
    }
}