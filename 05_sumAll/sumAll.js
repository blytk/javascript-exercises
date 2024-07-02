const sumAll = function(a, b) {
    
    // return the sum of all numbers between a and b, both included
    let total = 0;
    
    // iterate through all the numbers, adding each number to the total variable

    // if a is less than b is alright
    // if b is less than a? Swap the values from b to a and a to b (using a temp variable)

    // negative arguments? Return error

    if (a < 0 || b < 0) {
        return "ERROR";
    }

    // not a number?
    if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR"
    }

    if (b < a) {
        let c = a;
        a = b;
        b = c;
    }

    for (let i = a; i <= b; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
