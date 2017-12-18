// let input = `set a 1
// add a 2
// mul a a
// mod a 5
// snd a
// set a 0
// rcv a
// jgz a -1
// set a 1
// jgz a -2`;

let input = `set i 31
set a 1
mul p 17
jgz p p
mul a 2
add i -1
jgz i -2
add a -1
set i 127
set p 952
mul p 8505
mod p a
mul p 129749
add p 12345
mod p a
set b p
mod b 10000
snd b
add i -1
jgz i -9
jgz a 3
rcv b
jgz b -1
set f 0
set i 126
rcv a
rcv b
set p a
mul p -1
add p b
jgz p 4
snd a
set a b
jgz 1 3
snd b
set f 1
add i -1
jgz i -11
snd a
jgz f -16
jgz a -19`;

// let input = `snd 1
// snd 2
// snd p
// rcv a
// rcv b
// rcv c
// rcv d`;

let registers = {
    output: []
};
let output = [];
var programIndex = 0;
var recoveredFrequency;
var commands = input.split('\n');
run(commands);
console.log('Part 1: ' + recoveredFrequency);

function run(commands) {
    for(; programIndex < commands.length && !recoveredFrequency;) {
        let command = commands[programIndex];
        let parts = command.split(' ');
        switch(parts[0]) {
            case 'snd':
                sound(registers, parts[1]);
                break;
            case 'set':
                set(registers, parts[1], parts[2]);
                break;
            case 'add':
                add(registers, parts[1], parts[2]);
                break;
            case 'mul':
                mul(registers, parts[1], parts[2]);
                break;
            case 'mod':
                mod(registers, parts[1], parts[2]);
                break;
            case 'rcv':
                rcv(registers, parts[1]);
                break;
            case 'jgz':
                programIndex += jgz(registers, parts[1], parts[2]);
                break;
        }
        programIndex++;
    }
}

let program0 = {
    id: 0,
    locked: false,
    registers: {
        p: 0,
        output: []
    },
    index: 0,
    sends: 0,
    commands: input.split('\n')
};
let program1 = {
    id: 1,
    locked: false,
    registers: {
        p: 1,
        output: []
    },
    index: 0,
    sends: 0,
    commands: input.split('\n')
};
var currentProgram = program0;
program0.input = program1.registers.output;
program1.input = program0.registers.output;

runParallel();
console.log('Part 2: ' + program1.sends);

function runParallel() {
    let locked = false;
    while(!locked) {
        
        let command = currentProgram.commands[currentProgram.index];
        if(command) {
            let parts = command.split(' ');
            switch(parts[0]) {
                case 'snd':
                    let sendVal = getValue(currentProgram.registers, parts[1]);
                    currentProgram.registers.output.push(sendVal);
                    currentProgram.sends++;
                    if(currentProgram == program0) {
                        program1.locked = false;
                    } else {
                        program0.locked = false;
                    }
                    break;
                case 'set':
                    set(currentProgram.registers, parts[1], parts[2]);
                    break;
                case 'add':
                    add(currentProgram.registers, parts[1], parts[2]);
                    break;
                case 'mul':
                    mul(currentProgram.registers, parts[1], parts[2]);
                    break;
                case 'mod':
                    mod(currentProgram.registers, parts[1], parts[2]);
                    break;
                case 'rcv':
                    let val = currentProgram.input.shift();
                    if(val) {
                        set(currentProgram.registers, parts[1], parseInt(val, 10));
                    } else {
                        currentProgram.locked = true;
                    }
                    break;
                case 'jgz':
                    currentProgram.index += jgz(currentProgram.registers, parts[1], parts[2]);
                    break;
            }
        } else {
            currentProgram.locked = true;
        }
        
        if(program0.locked && program1.locked) {
            locked = true;
        } else if(currentProgram.locked) {
            // switch to the other program
            if(currentProgram == program0) {
                currentProgram = program1;
            } else {
                currentProgram = program0;
            }
        } else {
            currentProgram.index++;
        }
    }
}

function getValue(register, x) {
    if(isNaN(x)) {
        return register[x];
    }
    return parseInt(x, 10);
}

function sound(register, frequency) {
    // snd X plays a sound with a frequency equal to the value of X.
    register.output.push(getValue(register, frequency));
}

function set(register, x, y) {
    // set X Y sets register X to the value of Y.
    register[x] = getValue(register, y);
}

function add(register, x, y) {
    // add X Y increases register X by the value of Y.
    register[x] += getValue(register, y);
}

function mul(register, x, y) {
    // mul X Y sets register X to the result of multiplying the value contained in register X by the value of Y.
    register[x] *= getValue(register, y);
}

function mod(register, x, y) {
    // mod X Y sets register X to the remainder of dividing the value contained in register X by the value of Y (that is, it sets X to the result of X modulo Y).
    register[x] = register[x] % getValue(register, y);
}

function rcv(register, x) {
    // rcv X recovers the frequency of the last sound played, but only when the value of X is not zero. (If it is zero, the command does nothing.)
    if(getValue(register, x) == 0) {
        return;
    }
    recoveredFrequency = register.output.pop();
}

function jgz(register, x, y) {
    // jgz X Y jumps with an offset of the value of Y, but only if the value of X is greater than zero. (An offset of 2 skips the next instruction, an offset of -1 jumps to the previous instruction, and so on.)
    if(getValue(register, x) > 0) {
        return getValue(register, y) - 1;
    }
    return 0;
}