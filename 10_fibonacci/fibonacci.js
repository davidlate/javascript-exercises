const fibonacci = function (fibIndex) {
  let num1 = 1;
  let num2 = 1;
  let result = 0;

  if (fibIndex <= 0) return "OOPS";

  if (fibIndex == 1 || fibIndex == 2) return 1;

  for (let i = 3; i <= fibIndex; i++) {
    result = num1 + num2;
    num1 = num2;
    num2 = result;
  }

  return result;
};

// Do not edit below this line
module.exports = fibonacci;
