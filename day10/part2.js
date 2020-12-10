const fs = require('fs');

let input = fs.readFileSync('input.txt').toString().split("\n");

input = input.map((r) => r*1);

input.sort((a, b) => a-b);
input.unshift(0);
input.push(input[input.length-1]+3);

let counters = [1];

for(let i=1;i<input.length;i++){
    let cnt = count(i, 1) + count(i, 2) + count(i, 3);
    counters.push(cnt);
}
console.log("Solution", counters.pop());

function count(i, diff) {
    if (input[i] - input[i - diff] <= 3) {
        return counters[i - diff];
    }
    return 0;
}




