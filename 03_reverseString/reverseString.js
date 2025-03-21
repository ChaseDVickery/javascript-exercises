const reverseString = function(reverseInput) {
    let reversedString = "";
    for (let i = reverseInput.length-1; i >= 0; i--) {
        reversedString += reverseInput.at(i);
    }
    return reversedString;
};

// string.split("") returns a split array of character strings that can be reversed with array.reverse(), which can then be joined back with array.join():
// const reverseString = function (string) {
//     return string.split("").reverse().join("");
// };

// Do not edit below this line
module.exports = reverseString;
