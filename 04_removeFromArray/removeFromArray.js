const removeFromArray = function(array, ...valueToRemove) {
    const cleanedArray = [];
    for (const element of array) {
        if (!(valueToRemove.includes(element))) {
            cleanedArray.push(element)
        }
    }

    return cleanedArray
};

// Do not edit below this line
module.exports = removeFromArray;
