const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(values) {
	return values.reduce((total, val) => total+val, 0);
};

const multiply = function(values) {
  return values.reduce((total, val) => total * val);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let total = 1;
  for (let i = a; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
