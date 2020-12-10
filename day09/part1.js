const fs = require('fs');

let input = fs.readFileSync('input.txt').toString().split("\n");

input = input.map((r) => r*1);

let nrToFind = 0;
for (i=25;i<input.length;i++) {
    let toCheck = input[i];
    let found = false;
    for (j=i-25;j<i-1;j++) {
        for (k=j+1;k<i;k++) {
            if (input[j]+input[k] == toCheck) {
                found = true;
            }
        }
    }
    if (!found) {
        nrToFind = toCheck;
        break;
    }
}

console.log(nrToFind);