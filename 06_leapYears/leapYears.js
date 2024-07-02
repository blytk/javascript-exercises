// Given year: leap year?
const leapYears = function(year) {
    // divisible by 4? leap year
    if (year % 4 === 0) {
        // divisible by 100? Only leap if divisible by 400 too
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
