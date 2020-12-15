const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split(",").map(a=>a*1);

nrSpoken = input.length;

spokenNumberIndexes = {};
for (let nr in input) {
    spokenNumberIndexes[input[nr]] = [-1, nr*1];
}

let lastSpokenNumber = input[nrSpoken-1];
while (nrSpoken<30000000) {
    let speakNumber = 0;
    if (spokenNumberIndexes[lastSpokenNumber] && spokenNumberIndexes[lastSpokenNumber][0] != -1 && spokenNumberIndexes[lastSpokenNumber][1] != -1) {
        speakNumber = spokenNumberIndexes[lastSpokenNumber][1] - spokenNumberIndexes[lastSpokenNumber][0];
    }
    if (!spokenNumberIndexes[speakNumber])
    {
        spokenNumberIndexes[speakNumber] = [-1, nrSpoken];
    } else {
        spokenNumberIndexes[speakNumber][0] = spokenNumberIndexes[speakNumber][1];
        spokenNumberIndexes[speakNumber][1] = nrSpoken;
    }

    lastSpokenNumber = speakNumber;
    nrSpoken++;
}

console.log("Solution", lastSpokenNumber);