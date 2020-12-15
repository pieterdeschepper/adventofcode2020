const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split(",").map(a => a*1);

nrSpoken = input.length;

while (nrSpoken<30000000) {
    let lastSpokenNumber = input[nrSpoken-1];
    let speakNumber = 0;
    for (let i = input.length-2; i >=0; i--) {
        if (input[i] == lastSpokenNumber) {
            speakNumber = nrSpoken - (i+1);
            break;
        }
    }
    input.push(speakNumber);
    nrSpoken++;
}

console.log("Solution", input[input.length-1]);