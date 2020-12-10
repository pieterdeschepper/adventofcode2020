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
        if(!p[key]) {
            valid = false;
            break;
        }
        let v = p[key];
        switch(key) {
            case 'byr':
                valid = (v>=1920 && v<=2002);
                break;
            case 'iyr':
                valid = (v>=2010 && v<=2020);
                break;
            case 'eyr':
                valid = (v>=2020 && v<=2030);
                break;
            case 'hcl':
                valid = v.match(/^#[0-9a-f]{6}$/g) != null
                break;
            case 'ecl':
                valid = v.match(/^amb|blu|brn|gry|grn|hzl|oth$/g) != null
                break;
            case 'pid':
                valid = v.match(/^[0-9]{9}$/g) != null
                break;
            case 'hgt':
                let matches = /^([0-9]*)(cm|in)$/g.exec(v)
                if (!matches || matches.length != 3) valid = false;
                else {
                    if (matches[2] == "cm") {
                        valid = matches[1] >=150 && matches[1]<=193;
                    }
                    if (matches[2] == "in") {
                        valid = matches[1] >=59 && matches[1]<=76;
                    }
                }
                break;
        }
        if(!valid) break;
    }

    if(valid) cnt++;
}

console.log("Solution:", cnt);