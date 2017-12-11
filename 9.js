// var puzzleInput = './9.sample.txt';
// var puzzleInput = './9.input.txt';
var puzzleInput = './9.slalom.txt';
var input;

fs = require('fs')
fs.readFile(puzzleInput, 'utf8', function (err,data) {
	if(err) {
		throw err;
    }
    input = data.split('');
	processData();
});

let depth = 0;
let garbage = false;
let skip = false;
let total = 0;
let gargageCount = 0;

function processData() {
    while(input.length > 0) {
        let command = input.shift();
        if(skip) {
            skip = false;
        } else {
            if(garbage) {
                if(command == '>') {
                    garbage = false;
                } else if(command == '!') {
                    skip = true;
                } else {
                    gargageCount++
                }
            } else {
                switch(command) {
                    case '{':
                        depth++;
                        break;
                    case '}':
                        total += depth;
                        depth--;
                        break;
                    case '<':
                        garbage = true;
                    case '>':
                        // shouldn't hit here
                        break;
                    case '!':
                        skip = true;
                        break;
                    default:
                        // do nothing
                        break;
                }
            }
        }
    }
    console.log('Group count: ' + total);
    console.log('Garbage count: ' + gargageCount);
}