// let puzzleInput = [11,11,13,7,0,15,5,5,4,4,1,1,7,1,15,11];
// let puzzleInput = [0, 2, 7, 0];
let puzzleInput = [14,0,15,12,11,11,3,5,1,6,8,4,9,1,8,4];
registerHistory = [];

function findRegister() {
	let register = 0;
	let registerValue = puzzleInput[0];
	for(var i=0; i<puzzleInput.length; i++) {
		if(puzzleInput[i] > registerValue) {
			register = i;
			registerValue = puzzleInput[i];
		}
	}
	return register;
}

function registersEqual(a, b) {
	for(var i=0; i<a.length; i++) {
		if(a[i] != b[i]) {
			return false;
		}
	}
	return true;
}

function distribute(register) {
	let value = puzzleInput[register];
	puzzleInput[register] = 0;
	let index = register + 1;
	for(var i=0; i<value; i++) {
		puzzleInput[(index + i) % puzzleInput.length]++;
	}
}

function checkHistory() {
	let found = false;
	for(var i=0; i< registerHistory.length; i++) {
		if(registersEqual(registerHistory[i], puzzleInput)) {
			found = true;
			console.log('Location: ' + i);
			console.log('Loop: ' + (registerHistory.length - i));
		}
	}
	return found;
}

function copyRegister() {
	let newRegister = [];
	puzzleInput.forEach((block) => {
		newRegister.push(block);
	});
	return newRegister;
}

// do the program
let step = 0;
while(!checkHistory()) {
	registerHistory.push(copyRegister());
	distribute(findRegister());
	step++;
}
console.log(step);