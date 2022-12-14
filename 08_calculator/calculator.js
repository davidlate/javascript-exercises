const add = function (a, b) {
  if (isNaN(a) || isNaN(b)) return "ERROR";
  return a + b;
};

const subtract = function (a, b) {
  if (isNaN(a) || isNaN(b)) return "ERROR";
  return a - b;
};

const sum = function (args) {
  let sum = args.reduce((total, num) => {
    return total + num;
  }, 0);

  return sum;
};

const multiply = function (args) {
  let product = args.reduce((total, num) => {
    return total * num;
  }, 1);

  return product;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  let product = 1;
  for (let i = num; i >= 1; i--) {
    product = product * i;
  }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
