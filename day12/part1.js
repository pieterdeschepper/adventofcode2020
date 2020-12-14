const fs = require('fs');

let input = fs.readFileSync('input.txt').toString().split("\n");

let dir = "E";
let x=0,y=0;
let dirs = ["N", "E", "S", "W"];

for (let instr of input) {
    let cmd = instr.substr(0,1);
    let value = parseInt(instr.substr(1));

    switch (cmd) {
        case "E":
            x += value;
            break;
        case "W":
            x -= value;
            break;
        case "N":
            y -= value;
            break;
        case "S":
            y += value;
            break;
        case 'F':
            switch (dir) {
                case "E":
                    x += value;
                    break;
                case "W":
                    x -= value;
                    break;
                case "N":
                    y -= value;
                    break;
                case "S":
                    y += value;
                    break;
            }
            break;
        case 'L':
            dir = dirs[(4 + dirs.indexOf(dir) - value/90) % 4];
            break;
        case 'R':
            dir = dirs[(dirs.indexOf(dir) + value/90) % 4];
            break;
    }
}

console.log("Solution: ", Math.abs(x) + Math.abs(y));