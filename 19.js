var file = './19.input.txt';
var input = [];

fs = require('fs')
fs.readFile(file, 'utf8', function (err,data) {
	if(err) {
		throw err;
    }
    
    let lines = data.split('\n');
    lines.forEach(line => {
        input.push(line.split(''));
    });
	processData();
});

function validCharacter(symbol) {
    if(!symbol) {
        return false;
    }
    let code = symbol.charCodeAt(0);
    if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return true;
    }
    return false;
}

function validHorizontal(symbol) {
    return validCharacter(symbol) || symbol == '-';
}

function validVertical(symbol) {
    return validCharacter(symbol) || symbol == '|';
}

function processData() {
    let row = 0;
    let col = 0;
    let direction = 'down';

    for(var c=0; c<input[0].length; c++) {
        if(input[0][c] == '|') {
            col = c;
        }
    }

    let stuck = false;
    let output = '';
    let totalMoves = 0;
    while(!stuck) {
        let symbol = input[row][col];

        // check if we're on a letter

        if(validCharacter(symbol)) {
            output += symbol;
        }

        // Check for intersection

        if(symbol == '+') {
            // check the next symbol and if no good, look in the other two directions
            if(direction == 'down') {
                if(input[row+1][col] != '|') {
                    // left then right
                    if(validHorizontal(input[row][col-1])) {
                        direction = 'left';
                    } else if(validHorizontal(input[row][col+1])) {
                        direction = 'right';
                    }
                }
            } else if(direction == 'up') {
                if(input[row-1][col] != '|') {
                    // left then right
                    if(validHorizontal(input[row][col-1])) {
                        direction = 'left';
                    } else if(validHorizontal(input[row][col+1])) {
                        direction = 'right';
                    }
                }
            } else if(direction == 'left') {
                if(input[row][col-1] != '-') {
                    // up then down
                    if(validVertical(input[row+1][col])) {
                        direction = 'down';
                    } else if(validVertical(input[row-1][col])) {
                        direction = 'up';
                    }
                }
            } else if(direction == 'right') {
                if(input[row][col+1] != '-') {
                    // up then down
                    if(validVertical(input[row+1][col])) {
                        direction = 'down';
                    } else if(validVertical(input[row-1][col])) {
                        direction = 'up';
                    }
                }
            }
        } else if(symbol == '' || symbol == ' ') {
            stuck = true;
        }

        // move!

        if(!stuck) {
            switch(direction) {
                case 'down': 
                    row++;
                    break;
                case 'up':
                    row--;
                    break;
                case 'left':
                    col--;
                    break;
                case 'right':
                    col++;
                    break;
            }
        } else {
            console.log('Part 1: ' + output);
            console.log('Part 2: ' + totalMoves);
        }
        totalMoves++;
    }
}