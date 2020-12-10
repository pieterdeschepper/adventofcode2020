const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");

for(i=0;i<input.length-2;i++) {
    for (j=i;j<input.length-1;j++) {
        for (k = j; k < input.length; k++) {
            if (input[i]*1 + input[j]*1 + input[k]*1 == 2020) {
                console.log("Solution:", input[k]*1 * input[j]*1 * input[i]*1);
            }
        }
    }
}

