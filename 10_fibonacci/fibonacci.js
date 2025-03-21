const fibonacci = function(iterations) {
    iterations = parseInt(iterations);
    if (iterations === 0) { return 0; }
    else if (iterations < 0) { return "OOPS"; }
    const starter = [0, 1];
    // We could do this recursively, but
    // I don't know how that would play
    // with the testing system
    for (let i = 0; i < iterations-1; i++) {

        starter.splice(0, 2, starter[1], starter[0] + starter[1]);
    }
    return starter[1];
};

// Do not edit below this line
module.exports = fibonacci;
