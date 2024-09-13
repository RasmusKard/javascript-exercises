const add = function (aNum, bNum) {
	return aNum + bNum;
};

const subtract = function (aNum, bNum) {
	return aNum - bNum;
};

const sum = function (arr) {
	return arr.reduce((total, currentNum) => total + currentNum, 0);
};

const multiply = function (arr) {
	return arr.reduce((total, currentNum) => total * currentNum, 1);
};

const power = function (num, pow) {
	let numPow = num;
	for (let i = 1; i < pow; i++) {
		numPow *= num;
	}
	return numPow;
};

const factorial = function (num) {
	if (num === 0) {
		return 1;
	}

	let numFactorial = 1;
	for (let i = num; i > 0; i--) {
		numFactorial *= i;
	}
	return numFactorial;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
