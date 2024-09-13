const fibonacci = function (num) {
	num = parseInt(num);
	if (num < 0) {
		return "OOPS";
	}
	let fibA = 0;
	let fibB = 1;
	let fibSum = 0;
	for (let i = 0; i < num; i++) {
		fibSum = fibA + fibB;
		fibA = fibB;
		fibB = fibSum;
	}
	return fibA;
};

// Do not edit below this line
module.exports = fibonacci;
