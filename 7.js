// var puzzleInput = './7.sample.txt';
var puzzleInput = './7.input.txt';

fs = require('fs')
fs.readFile(puzzleInput, 'utf8', function (err,data) {
	if(err) {
		throw err;
	}
	parseData(data.split('\n'));
});

let nodes = {};
let nodeArray = [];
let leaves = [];
var root;

function parseData(data) {
	data.forEach((line) => {
		let parts = line.split(' (');
		
		let node = {
			name: parts[0],
			weight: parseInt(parts[1].split(')')[0], 10)
		}

		let refs = line.split('-> ')[1];
		if(refs) {
			node.childrenNames = refs.split(', ');
		}
		nodeArray.push(node);
		nodes[node.name] = node;
	});

	makeTree();
}

function findParent(name) {
	var parent;
	nodeArray.forEach((node) => {
		if(node.childrenNames && node.childrenNames.indexOf(name) > -1) {
			parent = node;
		}
	});
	return parent;
}

function makeTree() {
	nodeArray.forEach((node) => {
		node.parent = findParent(node.name);
	});

	findRoot(nodeArray[0]);
}

function findRoot(node) {
	if(node.parent) {
		return findRoot(node.parent);
	} else {
		root = node;
		console.log('root: ' + root.name);
		reverseTree();
	}
}

function reverseTree() {
	nodeArray.forEach((parent) => {
		// find children
		nodeArray.forEach((child) => {
			if(child.parent == parent) {
				if(!parent.children) {
					parent.children = [];
				}
				parent.children.push(child);
			}
		});
	});
	
	findLeaves();
	calculateWeights(root);
	let unbalanced = findUnbalanced(root);
	calculateBalancingWeight(unbalanced);
}

function findLeaves() {
	nodeArray.forEach((node) => {
		if(!node.children) {
			leaves.push(node);
		}
	});
}

function calculateWeights(node) {
	let weight = node.weight;
	if(node.children) {
		node.children.forEach((child) => {
			weight += calculateWeights(child);
		});
	}
	node.totalWeight = weight;
	return weight;
}

function findUnbalanced(node) {
	let aCount = 1;
	let bCount = 0;
	let a = node.children[0];
	var b;
	for(var i=1; i<node.children.length; i++) {
		let n = node.children[i];
		if(!b) {
			if(n.totalWeight != a.totalWeight) {
				b = n;
			} else {
				aCount++;
			}
		} else {
			if(n.totalWeight == a.totalWeight) {
				aCount++;
			} else {
				bCount++;
			}
		}
	}
	if(!b) {
		return node;
	} else {
		if(aCount > bCount) {
			return findUnbalanced(b);
		} else {
			return findUnbalanced(a);
		}
	}
}

function calculateBalancingWeight(node) {	
	// find the weight it should be
	var sibling;
	node.parent.children.forEach((s) => {
		if(!sibling && s != node) {
			sibling = s;
		}
	});

	// calc!
	let targetWeight = node.weight - (node.totalWeight - sibling.totalWeight);
	console.log('balancing weight: ' + targetWeight);
}