// var puzzleInput = './8.sample.txt';
var puzzleInput = './8.input.txt';

fs = require('fs')
fs.readFile(puzzleInput, 'utf8', function (err,data) {
	if(err) {
		throw err;
	}
	parseData(data.split('\n'));
});

let registers = {};
let highestValue = 0;

function getRegisterValue(name) {
    return registers[name] ? registers[name] : 0;
}

function setRegisterValue(name, amount) {
    registers[name] = amount;
    if(amount > highestValue) {
        highestValue = amount;
    }
}

function parseData(lines) {
    lines.forEach((line) => {
        let parts = line.split(' ');
        let register = parts[0];
        let direction = parts[1];
        let amount = parseInt(parts[2], 10);
        let condition = {
            action: parts[3], // if
            register: parts[4],
            check: parts[5],
            value: parseInt(parts[6], 10),
            result: false
        }

        switch(condition.check) {
            case '>':
                condition.result = getRegisterValue(condition.register) > condition.value;
                break;
            case '<':
                condition.result = getRegisterValue(condition.register) < condition.value;
                break;
            case '>=':
                condition.result = getRegisterValue(condition.register) >= condition.value;
                break;
            case '<=':
                condition.result = getRegisterValue(condition.register) <= condition.value;
                break;
            case '==':
                condition.result = getRegisterValue(condition.register) == condition.value;
                break;
            case '!=':
                condition.result = getRegisterValue(condition.register) != condition.value;
                break;
            default:
                console.log('New Condition Type: ' + condition.check);
        }

        if(condition.result) {
            if(direction == 'inc') {
                setRegisterValue(register, getRegisterValue(register) + amount);
            } else {
                setRegisterValue(register, getRegisterValue(register) - amount);
            }
        }
    });

    largestRegister();
}

function largestRegister() {
    var largestName, largestValue;
    for(register in registers) {
        let value = getRegisterValue(register);
        if(!largestValue || value > largestValue) {
            largestName = register;
            largestValue = value;
        }
    }
    console.log('largest register: ' + largestName + ', value: ' + largestValue);
    // console.log(registers);
    console.log('highest value ever: ' + highestValue);
}
// 8812