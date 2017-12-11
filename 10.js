// let puzzleInput = [3, 4, 1, 5];
// let puzzleInput = [225,171,131,2,35,5,0,13,1,246,54,97,255,98,254,110];
let puzzleInput = [76,1,88,148,166,217,130,0,128,254,16,2,130,71,255,229];
let ropeLength = 256;
let rope = [];
let position = 0;
let skipSize = 0;

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
    while(puzzleInput.length > 0) {
        let len = puzzleInput.shift();
        reverseSubset(position, len);
        position = (position + len + skipSize) % rope.length;
        skipSize++;
    }
}

// initializeRope();
// processData();
// console.log(rope[0] + ', ' + rope[1] + ' = ' + (rope[0] * rope[1]));

// part 2

initializeRope();
// let part2Input = '225,171,131,2,35,5,0,13,1,246,54,97,255,98,254,110';
let part2Input = '76,1,88,148,166,217,130,0,128,254,16,2,130,71,255,229';
let input = [];
part2Input.split('').forEach((char) => {
    input.push(char.charCodeAt(0));
});

// standard length suffix values
input.push(17);
input.push(31);
input.push(73);
input.push(47);
input.push(23);

function copyArray(arr) {
    let cpy = [];
    arr.forEach((x) => {
        cpy.push(x);
    });
    return cpy;
}

for(var i=0; i<64; i++) {
    puzzleInput = copyArray(input);
    processData();
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

let sparseHash = copyArray(rope);
let denseHash = computeDenseHash(rope);

let knotHash = '';
for(var i=0; i<denseHash.length; i++) {
    console.log(denseHash[i])
    knotHash += ("0" + denseHash[i].toString(16)).slice(-2);
}
console.log(knotHash);
