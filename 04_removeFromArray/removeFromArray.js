const removeFromArray = function(arrayValues, ...removalValues) {
    // // Method 1: Iterate removal manually
    // for (const toRemove of removalValues) {
    //     // Iterate backwards to not conflict indices
    //     for (let i = arrayValues.length-1; i >= 0; i--) {
    //         if (arrayValues[i] === toRemove) {
    //             arrayValues.splice(i, 1);
    //         }
    //     }
    // }
    // return arrayValues;

    // // Method 2: Filter?
    // return arrayValues.filter((value) => {
    //     for (const toRemove of removalValues) {
    //         if (value === toRemove) { return false; }
    //     }
    //     return true;
    // });

    // Method 3: Filter++
    return arrayValues.filter((value) => {
        return !removalValues.includes(value);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
