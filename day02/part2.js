const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");

let cnt=0;
for(let line of input) {
    [num, letter, password] = line.split(" ");
    [min, max] = num.split("-");
    letter = letter.substr(0,1);
    let count = 0;

    if (password.charAt(min-1) == letter) count++;
    if (password.charAt(max-1) == letter) count++;

    if (count == 1) {
        cnt++;
    }
}
console.log("Solution:", cnt);

