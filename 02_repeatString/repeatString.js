const repeatString = function(text, times) {
    if (times < 0) {
        return "ERROR";
    } else {
        let outputString = "";

        for (let i = 0; i < times; i++) {
            outputString += text;
        }

        return outputString;
    }
};

// Do not edit below this line
module.exports = repeatString;
