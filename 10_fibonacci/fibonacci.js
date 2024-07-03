// returns a specific number of the Fibonacci sequence
const fibonacci = function(index) {
    // is an array a good idea?

    // starting array with first two numbers
    const startingArray = [1, 1];

    if (index < 0 ) {
        return "OOPS";
    }

    // Item 0 is 0
    if (index == 0) {
        return 0;
    }

    // First two items are always === 1
    if (index == 1 || index == 2) {
        return 1;
    }
    // We need to complete the array with new numbers
    // We stop when we reach index - 1.
    // Index 1 = array[0], index 2 = array[1]... index - 1
    // Start loop at 2, as positions 0 and 1 already exist
    for (let i = 2; i < index; i++) {
        let digit1 = startingArray[i - 2];
        let digit2 = startingArray[i - 1];
        let newFibNumber = digit1 + digit2;

        // insert new Fibonacci number into the array
        startingArray.push(newFibNumber);
    }
    // We only calculated fibonacci numbers until the last needed
    // The last number in the array should be the number we need
    return startingArray[startingArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
