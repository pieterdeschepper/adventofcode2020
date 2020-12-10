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

loop1:
for(i=0;i<input.length-1;i++) {
    let sumArray = [];
    loop2:
    for (j=i;j<input.length;j++) {
        sumArray.push(input[j]);
        let sum = sumArray.reduce((a,b)=>a+b, 0);
        if (sum == nrToFind) {
            let min = sumArray.reduce((a,b) => a<b?a:b);
            let max = sumArray.reduce((a,b) => a>b?a:b);
            console.log("Solution:", min+max);
            break loop1;
        }
        if (sum > nrToFind) {
            break loop2;
        }
    }
}