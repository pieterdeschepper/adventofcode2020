const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");

for(i=0;i<input.length-1;i++) {
    for (j=i;j<input.length;j++) {
        if (input[i]*1+input[j]*1 == 2020) {
            console.log("Solution:", input[j]*1 * input[i]*1);
        }
    }
}