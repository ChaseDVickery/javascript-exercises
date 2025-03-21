const palindromes = function (origWord) {
    // First, get string to common format
    // let newWord = origWord.toLowerCase().split("").filter((letter) => { return !!letter.trim() && /[a-zA-Z0-9]/.test(letter); }).join("");
    let newWord = origWord
                .toLowerCase()
                .split("")
                .filter((letter) => {
                    return  !!letter.trim() &&
                            /[a-zA-Z0-9]/.test(letter);
                })
                .join("");
    // Iterate from back to front and vice-versa
    // Only need to iterate half because if true for first
    // half then true for second half
    for (let i = 0; i < (newWord.length+1) / 2; i++) {
        if (newWord.at(i) !== newWord.at(-i-1)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
