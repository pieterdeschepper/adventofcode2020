const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split("\n");

let cnt=0;
for(let line of input) {
    [num, letter, password] = line.split(" ");
    [min, max] = num.split("-");
    letter = letter.substr(0,1);
    let count = 0;

    for(i=0;i<password.length;i++) {
        if (password.charAt(i) == letter) {
            count++;
        }
    }
    if (count >=min && count <= max) {
        cnt++;
    }
}
console.log("Solution:", cnt);