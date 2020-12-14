const fs = require('fs');

let input = fs.readFileSync('input.txt').toString().split("\n");

let dir = "E";
let x=0,y=0;
let dirs = ["N", "E", "S", "W"];
let waypoint = {x:10,y:-1};

for (let instr of input) {
    let cmd = instr.substr(0,1);
    let value = parseInt(instr.substr(1));

    switch (cmd) {
        case "E":
            waypoint.x += value;
            break;
        case "W":
            waypoint.x -= value;
            break;
        case "N":
            waypoint.y -= value;
            break;
        case "S":
            waypoint.y += value;
            break;
        case 'F':
            x += value * waypoint.x;
            y += value * waypoint.y;
            break;
        case 'L':
            curDirindex = dirs.indexOf(dir);
            for(let i = 0; i< value/90; i++) {
                let temp = waypoint.x;
                waypoint.x = waypoint.y * (curDirindex %2 == 0 ? -1 : 1);
                waypoint.y = temp * (curDirindex %2 == 0 ? 1 : -1);
            }
            break;
        case 'R':
            curDirindex = dirs.indexOf(dir);
            for(let i = 0; i< value/90; i++) {
                let temp = waypoint.x;
                waypoint.x = waypoint.y * (curDirindex %2 == 0 ? 1 : -1);
                waypoint.y = temp * (curDirindex %2 == 0 ? -1 : 1);
            }
            break;
    }
}

console.log("Solution: ", Math.abs(x) + Math.abs(y));