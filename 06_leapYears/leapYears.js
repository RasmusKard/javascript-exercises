const leapYears = function(year) {
    // if it is divisible by 100 but isnt divisible by 400 then it isnt a leap year
    // if it is divisible by four but not 100 it is a leap year
    if (((year % 100 === 0) && (!(year % 400 === 0)))){
        return false
    } else if (year % 4 === 0) {
        return true
    } else {
        return false
    }


};

// Do not edit below this line
module.exports = leapYears;
