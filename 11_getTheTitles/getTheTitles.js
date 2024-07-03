// function takes the array and returns an array of titles
const getTheTitles = function(bookArray) {
    // create new array to add the titles
    const titleArray = [];
    // iterate through all elements of input array, and push the title to the new array
    for (const book of bookArray) {
        // add the title to the new array to be returned
        titleArray.push(book.title);
    }
    
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
