const fs = require('fs');

let input = fs.readFileSync('input.txt').toString().split("\n");

let grid = [];
for (let i=0;i<input.length;i++) grid.push(input[i].split(''));

let state = getState();
let previousState = '';

while (previousState!=state) {
    let newGrid = grid.map((arr) => arr.slice());
    for (let i = 0; i<grid.length;i++) {
        for (let j=0;j<grid[i].length;j++) {
            if (grid[i][j] != ".") {
                let count = getAdjacentSeatCount(i,j);
                switch (grid[i][j]) {
                    case 'L':
                        if (count == 0) {
                            newGrid[i][j] = "#";
                        }
                        break;
                    case '#':
                        if (count >= 4) {
                            newGrid[i][j] = "L";
                        }
                        break;
                }
            }
        }
    }
    grid=newGrid;
    previousState = state;
    state = getState();
}

console.log("Solution:", countOccupiedSeats());

function getAdjacentSeatCount(x,y) {
    let count = 0;
    for (i=x-1;i<x+2;i++) {
        for (j=y-1;j<y+2;j++) {
            if (i>=0 && i<grid.length && j >=0 && j<grid[0].length && !(i==x && j==y) && grid[i][j] == "#") {
                count++;
            }
        }
    }
    return count;
}

function getState() {
    var state = grid.map((arr) => arr.slice());
    for (let i=0;i<state.length;i++) {
        state[i] = state[i].join('');
    }
    return state.join('');
}

function countOccupiedSeats() {
    let count = 0;
    for (let i = 0; i<grid.length;i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] == "#") {
                count++;
            }
        }
    }
    return count;
}