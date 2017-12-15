// let genAStart = 65;
// let genBStart = 8921;

let genAStart = 116;
let genBStart = 299;

// let genAStart = 618;
// let genBStart = 814;

let genAFactor = 16807;
let genBFactor = 48271;
let genMod = 2147483647;

function dec2bin(num) {
    return ('00000000000000000000000000000000' + num.toString(2)).slice(-32);
}

function part1() {
    let limit = 40000000;
    let matches = 0;
    
    let genA = genAStart;
    let genB = genBStart;

    for(var i=0; i<limit; i++) {
        genA = (genA * genAFactor) % genMod;
        let a = dec2bin(genA).slice(-16);

        genB = (genB * genBFactor) % genMod;
        let b = dec2bin(genB).slice(-16);

        if(a == b) {
            matches++;
        }
    }
    console.log('Part 1: ' + matches);
}

function part2() {
    let limit = 5000000;
    let matches = 0;
    
    let genA = genAStart;
    let genB = genBStart;

    for(var i=0; i<limit; i++) {
        do {
            genA = (genA * genAFactor) % genMod;
        } while(genA % 4 != 0);
        let a = dec2bin(genA).slice(-16);

        do {
            genB = (genB * genBFactor) % genMod;
        } while(genB % 8 != 0);
        let b = dec2bin(genB).slice(-16);

        if(a == b) {
            matches++;
        }
    }
    console.log('Part 2: ' + matches);
}

part1();
part2();