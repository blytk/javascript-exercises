const palindromes = function (string) {
    // A palindrome is a tring spelled the same both forwards and backwards, ignoring punctuation and word breaks

    // Convert to lower case for comparison
    let modifiedString = string.toLowerCase();

    // convert to array for char manipulation (can't directly edit chars in strings apparently in js)
    const array1 = modifiedString.split("");

    // Create array to copy relevant chars into it
    const array2 = [];
    // Remove punctuation signs and word breaks, replace with ""
    for (let i = 0, length = array1.length; i < length; i++) {
        if (array1[i] === "," || array1[i] === ";" || array1[i] === "." 
            || array1[i] === "." || array1[i] === "?" || array1[i] === "!" || array1[i] === " ") {
                continue;
        } else {
            array2.push(array1[i]);
        }
    }

    // convert back to string and trim whitespaces
    modifiedString = array2.join("").trim();

   
    // Now compare first position with last position, second with second to last, etc
    for (let i = 0, length = modifiedString.length, j = length - 1; i < length; i++, j--) {
        if (modifiedString[i] === modifiedString[j]) {
            continue
        } else {
            return false;
        }
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
