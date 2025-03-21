const reverseString = function(reverseInput) {
    let reversedString = "";
    for (let i = reverseInput.length-1; i >= 0; i--) {
        reversedString += reverseInput.at(i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
