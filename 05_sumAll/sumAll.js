const sumAll = function(firstValue, secondValue) {
    if (
        typeof(firstValue) !== "number" ||
        !Number.isInteger(firstValue) ||
        firstValue < 0 ||
        typeof(secondValue) !== "number" ||
        !Number.isInteger(secondValue) ||
        secondValue < 0
    ) {
        return "ERROR";
    }

    let low     = Math.min(firstValue, secondValue);
    let high    = Math.max(firstValue, secondValue);
    let sum     = 0;
    for (let i = low; i <= high; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
