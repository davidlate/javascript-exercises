const palindromes = function (input) {
  let result = [];

  let word = input.split("").reverse();
  word = word.join("").toLowerCase();
  word = word.replace(/\W/g, "");
  console.log(word);

  item = input.toLowerCase();
  item = item.replace(/\W/g, "");

  result.push(word === item);

  return result.every((item) => item);
};

// Do not edit below this line
module.exports = palindromes;
