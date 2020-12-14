const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");

let memory = [];
let mask = "";

let sum = 0;
for (let line of input) {
    [instr, param] = line.split( " = ");
    if (instr == "mask") {
        mask = param;
    } else {
        let pos = parseInt(instr.substr(4,instr.length-5)).toString(2).padStart(36,'0');
        let allPositions = getAllPositions([], pos, mask);
        param = parseInt(param);
        for (let newPos of allPositions) {
            newPos = parseInt(newPos,2);
            if (memory[newPos]) {
                sum -= memory[newPos];
            }
            memory[newPos] = param;
            sum += param;
        }
    }
}

console.log("Solution", sum);

function getAllPositions(positions, iPos, iMask) {
    let newValue = "";

    for (let i=0; i < iMask.length; i++) {
        if (iMask.charAt(i) == "X") {
            if (i == iMask.length-1) {
                positions.push(newValue + "0");
                positions.push(newValue + "1");
            } else {
                let newPositions = getAllPositions([], iPos.substr(i+1), iMask.substr(i+1));
                for (let newPos of newPositions) {
                    positions.push(newValue + "0" + newPos);
                    positions.push(newValue + "1" + newPos);
                }
            }
        } else {
            newValue += iMask.charAt(i) == "1" ? 1 : iPos.charAt(i);
        }
    }
    positions.push(newValue);

    return positions.filter(a => a.length == iPos.length);
}