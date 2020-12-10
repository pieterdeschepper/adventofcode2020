const fs = require('fs');

let input = fs.readFileSync('input.txt').toString().split("\n\n");
input = input.map(x => x.replace(/\n/g, " "));

let cnt=0;
let neededKeys=['byr','iyr','eyr', 'hgt', 'hcl', 'ecl', 'pid'];
for(let passport of input) {
    let values = (passport.split(" "));
    let p = {};

    for(let v of values) {
        [key,value] = v.split(':');
        p[key] = value;
    }
    let valid=true;
    for (let key of neededKeys) {
        if(!p[key]) valid = false;
    }

    if(valid) cnt++;
}

console.log("Solution:", cnt);