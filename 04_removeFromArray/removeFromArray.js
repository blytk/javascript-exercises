const removeFromArray = function(array, elementsToRemove) {
    // create new array for output
    let outputArray = [];
    
    // original array length
    const arrayLength = array.length;

    // iterate through the array, if it's not the elementToRemove, copy, else, continue
    for (let i = 0; i < arrayLength; i++) {
        let push = true;
        // check for every element of the original array against the elementsToRemove (arguments[x]) (argument 0 is the original array, so we start at 1 to compare)
        for (let j = 1; j < arguments.length; j++) {
            if (array[i] === arguments[j]) {
                push = false;
                break;
            }
        }
        if (push) {
            outputArray.push(array[i]);
        }
    }
    // return new array without the removed element
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
