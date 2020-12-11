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
                let count = getVisibleSeatCount(i,j);
                switch (grid[i][j]) {
                    case 'L':
                        if (count == 0) {
                            newGrid[i][j] = "#";
                        }
                        break;
                    case '#':
                        if (count >= 5) {
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

function getVisibleSeatCount(x,y) {
    let count = 0;
    //vertical up
    loop:
    for (i=x-1;i>=0;i--) {
        switch(grid[i][y])
        {
            case '#':
                count++;
            case 'L':
                break loop;
        }
    }
    //vertical down
    loop:
    for (i=x+1;i<grid.length;i++) {
        switch(grid[i][y])
        {
            case '#':
                count++;
            case 'L':
                break loop;
        }
    }
    //horizontal left
    loop:
    for (i=y-1;i>=0;i--) {
        switch(grid[x][i])
        {
            case '#':
                count++;
            case 'L':
                break loop;
        }
    }
    //horizontal right
    loop:
    for (i=y+1;i<grid[x].length;i++) {
        switch(grid[x][i])
        {
            case '#':
                count++;
            case 'L':
                break loop;
        }
    }
    //Diagonal up left
    loop:
    for (i=x-1,j=y-1;i>=0&&j>=0;i--,j--) {
        switch(grid[i][j])
        {
            case '#':
                count++;
            case 'L':
                break loop;
        }
    }
    //Diagonal up right
    loop:
    for (i=x-1,j=y+1;i>=0&&j<grid[0].length;i--,j++) {
        switch(grid[i][j])
        {
            case '#':
                count++;
            case 'L':
                break loop;
        }
    }
    //Diagonal down right
    loop:
    for (i=x+1,j=y+1;i<grid.length&&j<grid[0].length;i++,j++) {
        switch(grid[i][j])
        {
            case '#':
                count++;
            case 'L':
                break loop;
        }
    }
    //Diagonal down left
    loop:
    for (i=x+1,j=y-1;i<grid.length&&j>=0;i++,j--) {
        switch(grid[i][j])
        {
            case '#':
                count++;
            case 'L':
                break loop;
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