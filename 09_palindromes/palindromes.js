const palindromes = function (str) {
	str = str.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
	str = str.toLowerCase();
	reverseStr = str.split("").reverse().join("");
	console.log(reverseStr);
	console.log(str);
	return str === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
