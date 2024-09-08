const sumAll = function(intA, intB) {
    if (
        (Number.isInteger(intA) && intA > 0) && 
        (Number.isInteger(intB) && intB > 0)
    ) {
        const endInt = Math.max(intA, intB);
        // Gaussian sum, hardcoded for start at 1
        return (endInt * (endInt + 1) / 2)
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
