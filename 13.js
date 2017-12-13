let puzzleInput = [{
    depth: 0,
    range: 3,
    scanner: 1,
    down: true
}, {
    depth: 1,
    range: 2,
    scanner: 1,
    down: true
}, {
    depth: 2,
    range: 4,
    scanner: 1,
    down: true
}, {
    depth: 4,
    range: 8,
    scanner: 1,
    down: true
}, {
    depth: 6,
    range: 5,
    scanner: 1,
    down: true
}, {
    depth: 8,
    range: 6,
    scanner: 1,
    down: true
}, {
    depth: 10,
    range: 6,
    scanner: 1,
    down: true
}, {
    depth: 12,
    range: 4,
    scanner: 1,
    down: true
}, {
    depth: 14,
    range: 6,
    scanner: 1,
    down: true
}, {
    depth: 16,
    range: 6,
    scanner: 1,
    down: true
}, {
    depth: 18,
    range: 17,
    scanner: 1,
    down: true
}, {
    depth: 20,
    range: 8,
    scanner: 1,
    down: true
}, {
    depth: 22,
    range: 8,
    scanner: 1,
    down: true
}, {
    depth: 24,
    range: 8,
    scanner: 1,
    down: true
}, {
    depth: 26,
    range: 9,
    scanner: 1,
    down: true
}, {
    depth: 28,
    range: 8,
    scanner: 1,
    down: true
}, {
    depth: 30,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 32,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 34,
    range: 10,
    scanner: 1,
    down: true
}, {
    depth: 36,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 38,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 40,
    range: 8,
    scanner: 1,
    down: true
}, {
    depth: 42,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 44,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 46,
    range: 10,
    scanner: 1,
    down: true
}, {
    depth: 48,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 50,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 52,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 54,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 56,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 58,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 60,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 62,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 64,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 66,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 68,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 70,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 72,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 74,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 76,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 80,
    range: 18,
    scanner: 1,
    down: true
}, {
    depth: 82,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 90,
    range: 18,
    scanner: 1,
    down: true
}];

// Sample
// let puzzleInput = [{
//     depth: 0,
//     range: 3,
//     scanner: 1,
//     down: true
// },{
//     depth: 1,
//     range: 2,
//     scanner: 1,
//     down: true
// },{
//     depth: 4,
//     range: 4,
//     scanner: 1,
//     down: true
// },{
//     depth: 6,
//     range: 4,
//     scanner: 1,
//     down: true
// }];

// Another
// let puzzleInput = [{
//     depth: 0,
//     range: 3,
//     scanner: 1,
//     down: true
// }, {
//     depth: 1,
//     range: 2,
//     scanner: 1,
//     down: true
// }, {
//     depth: 2,
//     range: 4,
//     scanner: 1,
//     down: true
// }, {
//     depth: 4,
//     range: 4,
//     scanner: 1,
//     down: true
// }, {
//     depth: 6,
//     range: 5,
//     scanner: 1,
//     down: true
// }, {
//     depth: 8,
//     range: 8,
//     scanner: 1,
//     down: true
// }, {
//     depth: 10,
//     range: 6,
//     scanner: 1,
//     down: true
// }, {
//     depth: 12,
//     range: 6,
//     scanner: 1,
//     down: true
// }, {
//     depth: 14,
//     range: 8,
//     scanner: 1,
//     down: true
// }, {
//     depth: 16,
//     range: 6,
//     scanner: 1,
//     down: true
// }, {
//     depth: 18,
//     range: 6,
//     scanner: 1,
//     down: true
// }, {
//     depth: 20,
//     range: 8,
//     scanner: 1,
//     down: true
// }, {
//     depth: 22,
//     range: 12,
//     scanner: 1,
//     down: true
// }, {
//     depth: 24,
//     range: 8,
//     scanner: 1,
//     down: true
// }, {
//     depth: 26,
//     range: 8,
//     scanner: 1,
//     down: true
// }, {
//     depth: 28,
//     range: 12,
//     scanner: 1,
//     down: true
// }, {
//     depth: 30,
//     range: 8,
//     scanner: 1,
//     down: true
// }, {
//     depth: 32,
//     range: 12,
//     scanner: 1,
//     down: true
// }, {
//     depth: 34,
//     range: 9,
//     scanner: 1,
//     down: true
// }, {
//     depth: 36,
//     range: 14,
//     scanner: 1,
//     down: true
// }, {
//     depth: 38,
//     range: 12,
//     scanner: 1,
//     down: true
// }, {
//     depth: 40,
//     range: 12,
//     scanner: 1,
//     down: true
// }, {
//     depth: 42,
//     range: 12,
//     scanner: 1,
//     down: true
// }, {
//     depth: 44,
//     range: 14,
//     scanner: 1,
//     down: true
// }, {
//     depth: 46,
//     range: 14,
//     scanner: 1,
//     down: true
// }, {
//     depth: 48,
//     range: 10,
//     scanner: 1,
//     down: true
// }, {
//     depth: 50,
//     range: 14,
//     scanner: 1,
//     down: true
// }, {
//     depth: 52,
//     range: 12,
//     scanner: 1,
//     down: true
// }, {
//     depth: 54,
//     range: 14,
//     scanner: 1,
//     down: true
// }, {
//     depth: 56,
//     range: 12,
//     scanner: 1,
//     down: true
// }, {
//     depth: 58,
//     range: 17,
//     scanner: 1,
//     down: true
// }, {
//     depth: 60,
//     range: 10,
//     scanner: 1,
//     down: true
// }, {
//     depth: 64,
//     range: 14,
//     scanner: 1,
//     down: true
// }, {
//     depth: 66,
//     range: 14,
//     scanner: 1,
//     down: true
// }, {
//     depth: 68,
//     range: 12,
//     scanner: 1,
//     down: true
// }, {
//     depth: 70,
//     range: 12,
//     scanner: 1,
//     down: true
// }, {
//     depth: 72,
//     range: 18,
//     scanner: 1,
//     down: true
// }, {
//     depth: 74,
//     range: 14,
//     scanner: 1,
//     down: true
// }, {
//     depth: 78,
//     range: 14,
//     scanner: 1,
//     down: true
// }, {
//     depth: 82,
//     range: 14,
//     scanner: 1,
//     down: true
// }, {
//     depth: 84,
//     range: 24,
//     scanner: 1,
//     down: true
// }, {
//     depth: 86,
//     range: 14,
//     scanner: 1,
//     down: true
// }, {
//     depth: 94,
//     range: 14,
//     scanner: 1,
//     down: true
// }];

let maxDepth = 0;
puzzleInput.forEach((firewall) => {
    if(firewall.depth > maxDepth) {
        maxDepth = firewall.depth;
    }
});
let time = 0;
let packet = 0;
let severity = 0;
let packetDelay = 0;
let caught = false;

function scan() {
    // are we caught (first half of picosecond)
    if(time >= packetDelay) {
        puzzleInput.forEach((firewall) => {
            if(firewall.depth == packet && firewall.scanner == 1) {
                severity += firewall.depth * firewall.range;
                caught = true;
            }
        });
    }
}

function moveScanners() {
    // move scanners (second half of picosecond)
    puzzleInput.forEach((firewall) => {
        if(firewall.down && firewall.scanner == firewall.range) {
            firewall.down = false;
        }
        if(!firewall.down && firewall.scanner == 1) {
            firewall.down = true;
        }

        if(firewall.down) {
            firewall.scanner++;
        } else {
            firewall.scanner--;
        }
    });
}

function step() {
    scan();
    moveScanners();
    
    // increase time and move our packet
    if(time >= packetDelay) {
        packet++;
    }
    time++;
}

function runSimulation() {
    while(packet <= maxDepth) {
        step();    
    }    
}

function reset() {
    time = 0;
    packet = 0;
    severity = 0;
    caught = false;
    puzzleInput.forEach((firewall) => {
        firewall.scanner = 1;
        firewall.down = true;
    });    
}

// Part 1

runSimulation();

console.log('Part 1: ' + severity);

// Part 2 - Brute Force FTW!

// packetDelay = 28000;
// do {
//     reset();
//     packetDelay++;
//     runSimulation();
//     if(packetDelay % 1000 == 0) {
//         console.log('delay: ' + packetDelay + ', severity: ' + severity);
//     }
// } while(caught);

// console.log('Part 2: ' + packetDelay);

// Brute Force not working.... this will be better

// puzzleInput = [{
//     depth: 0,
//     range: 3
// },{
//     depth: 1,
//     range: 2
// },{
//     depth: 4,
//     range: 4
// },{
//     depth: 6,
//     range: 4
// }];


puzzleInput = [{
    depth: 0,
    range: 3,
    scanner: 1,
    down: true
}, {
    depth: 1,
    range: 2,
    scanner: 1,
    down: true
}, {
    depth: 2,
    range: 4,
    scanner: 1,
    down: true
}, {
    depth: 4,
    range: 4,
    scanner: 1,
    down: true
}, {
    depth: 6,
    range: 5,
    scanner: 1,
    down: true
}, {
    depth: 8,
    range: 8,
    scanner: 1,
    down: true
}, {
    depth: 10,
    range: 6,
    scanner: 1,
    down: true
}, {
    depth: 12,
    range: 6,
    scanner: 1,
    down: true
}, {
    depth: 14,
    range: 8,
    scanner: 1,
    down: true
}, {
    depth: 16,
    range: 6,
    scanner: 1,
    down: true
}, {
    depth: 18,
    range: 6,
    scanner: 1,
    down: true
}, {
    depth: 20,
    range: 8,
    scanner: 1,
    down: true
}, {
    depth: 22,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 24,
    range: 8,
    scanner: 1,
    down: true
}, {
    depth: 26,
    range: 8,
    scanner: 1,
    down: true
}, {
    depth: 28,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 30,
    range: 8,
    scanner: 1,
    down: true
}, {
    depth: 32,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 34,
    range: 9,
    scanner: 1,
    down: true
}, {
    depth: 36,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 38,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 40,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 42,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 44,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 46,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 48,
    range: 10,
    scanner: 1,
    down: true
}, {
    depth: 50,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 52,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 54,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 56,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 58,
    range: 17,
    scanner: 1,
    down: true
}, {
    depth: 60,
    range: 10,
    scanner: 1,
    down: true
}, {
    depth: 64,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 66,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 68,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 70,
    range: 12,
    scanner: 1,
    down: true
}, {
    depth: 72,
    range: 18,
    scanner: 1,
    down: true
}, {
    depth: 74,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 78,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 82,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 84,
    range: 24,
    scanner: 1,
    down: true
}, {
    depth: 86,
    range: 14,
    scanner: 1,
    down: true
}, {
    depth: 94,
    range: 14,
    scanner: 1,
    down: true
}];

puzzleInput.forEach((input) => {
    input.mod = 2 * (input.range - 1);
});

packetDelay = 0;
do {
    severity = 0;
    for(var i=0; i<puzzleInput.length && severity < 1; i++) {
        let gate = puzzleInput[i];

        if((packetDelay + gate.depth) % gate.mod == 0) {
            severity = 1;
        }
    }
    packetDelay++;
} while(severity > 0)

console.log(packetDelay-1);

// yuck.