// let input = 'flqrgnkx'; // example
let input = 'xlqgujun';
let hashes = [];
let grid = [];
let usedSquares = 0;
let regions = 0;

// generate knot hashes
for(var i=0; i<128; i++) {
    hashes.push(input + '-'+i);
}

// process hashes
hashes.forEach((hash) => {
    grid.push(hex2bin(getKnotHash(hash)));
});

grid.forEach((row) => {
    for(var i=0; i<row.length; i++) {
        if(row[i] == '1') {
            usedSquares++;
        }
    }
});

function hex2bin(hash) {
    let bin = '';
    for(var i=0; i<hash.length; i++) {
        bin += ('0000' + parseInt(hash[i], 16).toString(2)).slice(-4);
    }
    return bin;
}

console.log('Part 1: ' + usedSquares);

for(var row = 0; row < grid.length; row++) {
    for(var col = 0; col < grid[row].length; col++) {
        if(grid[row][col] == '1') {
            destroyRegion(row, col);
            regions++;
        }
    }
}

console.log('Part 2: ' + regions);

// Grid Destruction

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function destroyRegion(row, col) {
    grid[row] = replaceAt(grid[row], col, '0');
    
    // up
    if(row > 0 && grid[row-1][col] == '1') {
        destroyRegion(row-1, col);
    }
    
    // down
    if(row + 1 < grid.length && grid[row+1][col] == '1') {
        destroyRegion(row+1, col);
    }

    // left
    if(col > 0 && grid[row][col-1] == '1') {
        destroyRegion(row, col-1);
    }

    // right
    if(col + 1 < grid[row].length && grid[row][col+1] == '1') {
        destroyRegion(row, col+1);
    }
}

// Knot Hash Algorithm

var ropeLength;
var rope;
var position;
var skipSize;
var hashCodes;

function getKnotHash(knotStr) {
    ropeLength = 256;
    rope = [];
    position = 0;
    skipSize = 0;
    hashCodes = [];
    initializeRope();

    knotStr.split('').forEach((char) => {
        hashCodes.push(char.charCodeAt(0));
    });

    // standard length suffix values
    hashCodes.push(17);
    hashCodes.push(31);
    hashCodes.push(73);
    hashCodes.push(47);
    hashCodes.push(23);

    for(var i=0; i<64; i++) {
        knotInput = copyArray(hashCodes);
        processData();
    }

    let sparseHash = copyArray(rope);
    let denseHash = computeDenseHash(rope);

    let knotHash = '';
    for(var i=0; i<denseHash.length; i++) {
        knotHash += ("0" + denseHash[i].toString(16)).slice(-2);
    }
    return knotHash;
}

function initializeRope() {
    for(var i=0; i<ropeLength; i++) {
        rope[i] = i;
    }
}

function reverseSubset(start, length) {
    for(var offset = 0; offset < length/2; offset++) {
        let a = (start + offset) % rope.length;
        let b = (start + length - 1 - offset) % rope.length;
        let tmp = rope[a];
        rope[a] = rope[b];
        rope[b] = tmp;
    }
}

function processData() {
    while(knotInput.length > 0) {
        let len = knotInput.shift();
        reverseSubset(position, len);
        position = (position + len + skipSize) % rope.length;
        skipSize++;
    }
}

function copyArray(arr) {
    let cpy = [];
    arr.forEach((x) => {
        cpy.push(x);
    });
    return cpy;
}

function computeDenseHash(src) {
    let dest = [];
    for(var i=0; i < 16; i++) {
        let offset = 16 * i;
        dest.push(
            src[0 + offset] ^ src[1 + offset] ^ src[2 + offset] ^ src[3 + offset] ^
            src[4 + offset] ^ src[5 + offset] ^ src[6 + offset] ^ src[7 + offset] ^
            src[8 + offset] ^ src[9 + offset] ^ src[10 + offset] ^ src[11 + offset] ^
            src[12 + offset] ^ src[13 + offset] ^ src[14 + offset] ^ src[15 + offset]
        )
    }
    return dest;
}