function getNextSquare(target) {
	let i = 2;
	while(i*i <= target) {
		i++;
	}
	return i
}


// let num = 265149;
let num = 361527;
let i = getNextSquare(num);
let nextSquare = i * i;
let previousSquare = (i - 1) * (i - 1);

// Horizontal or Vertical Offset
let offset = nextSquare - num;
let sectionLength = (nextSquare - previousSquare -1) / 4;
let HVOffset = sectionLength - offset % sectionLength;

let radius = Math.floor(i / 2);

console.log(HVOffset + radius);
// // 438



// let puzzleInput = 265149;
let puzzleInput = 361527;
let radius = 1;
let direction = 0;
let currentSide = [1];
let previousSides = [[1], [1], [1], [1]]

var currentCell = 0;
let previousCell = 0;
let sideOffset = 0;
let carryOver = 0;


while(currentCell < puzzleInput) {
	currentCell = previousCell;
	// add the previous side's values
	let previousSide = previousSides[direction % 4];
	if(previousSide[sideOffset-1]) {
		currentCell += previousSide[sideOffset-1];
	}
	if(previousSide[sideOffset]) {
		currentCell += previousSide[sideOffset];
	}
	if(previousSide[sideOffset+1]) {
		currentCell += previousSide[sideOffset+1];
	}
	// carry over from adjacent side
	if(sideOffset == 0 && radius > 1) {
		currentCell += carryOver;
	}
	
	sideOffset++;
	currentSide.push(currentCell);
	carryOver = previousCell;
	previousCell = currentCell;

	// corner!
	if(sideOffset >= radius) {
		previousSides[direction % 4] = currentSide;
		direction++;
		sideOffset = 0;
		currentSide = [];
		currentSide.push(currentCell); // push the corner value into the new direction as well

		// radius increase every two corners!
		if(direction % 2 == 0) {
			radius++;
		}
	}
}
console.log(currentCell);


// 266330 = answer
