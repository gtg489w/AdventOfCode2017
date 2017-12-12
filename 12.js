var puzzleInput = './12.input.txt';
// var puzzleInput = './12.slalom.txt';
var input;
let programs = {};

fs = require('fs')
fs.readFile(puzzleInput, 'utf8', function (err,data) {
	if(err) {
		throw err;
    }
    input = data.split('\n');
	processData();
});

function processData() {
    input.forEach((comm) => {
        let parts = comm.split(' <-> ');
        let source = parts[0];
        let destinations = parts[1].split(', ');

        programs[source] = {
            source: source,
            destinations: []
        };
        destinations.forEach((destination) => {
            if(programs[destination]) {
                programs[source].destinations.push(programs[destination]);
                
                // reverse linking
                programs[destination].destinations.push(programs[source]);
            }
        });
    });

    console.log('Part 1: ' + countCommChannels('0'));
    let groups = 1;
    for(var program in programs) {
        if(countCommChannels(program) > 0) {
            groups++;
        }
    }
    console.log('Part 2: ' + groups);
}

function countCommChannels(source) {
    let count = 0;
    if(!programs[source].visited) {
        count++;
    } else {
        return count;
    }
    programs[source].visited = true;
    programs[source].destinations.forEach((destination) => {
        count += countCommChannels(destination.source);
    });
    return count;
}