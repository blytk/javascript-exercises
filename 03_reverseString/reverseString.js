const reverseString = function(text) {
    let reversedString = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversedString = reversedString + text[i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
