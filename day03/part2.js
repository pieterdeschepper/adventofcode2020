const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");


function getTreeCount(right, down) {
    let j = 0;
    let cnt = 0;
    for (let i=down;i<input.length;i+=down) {
        j = (j+right) % input[0].length;
        if(input[i].charAt(j) == "#") cnt++;
    }
    return cnt;
}

let result = getTreeCount(1,1) * getTreeCount(3,1) * getTreeCount(5,1) * getTreeCount(7,1) * getTreeCount(1,2);

console.log("Solution: ", result);

