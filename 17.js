let steps = 377;
let max = 2017;
let buffer = [0];
let position = 0;

function head(arr, length) {
    return arr.slice(0, length);
}

function tail(arr, length) {
    if(length < 1) {
        return [];
    }
    return arr.slice(-1 * length);
}
       
for(var index=1; index <= max; index++) {
    position = (position + steps) % buffer.length;
    buffer = head(buffer, position + 1).concat([index], tail(buffer, buffer.length - position - 1));
    position++;
}

console.log('Part 1: ' + buffer[position + 1]);

max = 50000000;
buffer = 1;
position = 0;
value = 0;

for(var index=1; index <= max; index++) {
    position = (position + steps) % buffer;
    buffer++;
    if(position == 0) {
        value = index;
    }
    position++;
}

console.log('Part 2: ' + value);
