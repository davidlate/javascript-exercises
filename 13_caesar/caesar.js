const caesar = function (string, shift) {
  let newString = [];

  for (letter of string) {
    let code = letter.charCodeAt();
    let shiftLetter = letter;
    let shiftCode;

    if (code >= 95 && code <= 122) {
      //lowercase

      shiftCode = code + shift;

      while (shiftCode > 122) shiftCode = 95 + Math.abs(122 - shiftCode) + 1;

      while (shiftCode < 95) shiftCode = 122 - Math.abs(95 - shiftCode) - 1;

      let shifted = String.fromCharCode(shiftCode);

      newString.push(shifted);
    } else if (code >= 65 && code <= 90) {
      //uppercase

      shiftCode = code + shift;

      while (shiftCode > 90) shiftCode = 65 + Math.abs(90 - shiftCode) - 1;
      while (shiftCode < 65) shiftCode = 90 - Math.abs(shiftCode - 65) + 1;

      let shifted = String.fromCharCode(shiftCode);
      newString.push(shifted);
    } else {
      newString.push(shiftLetter);
    }
  }

  newString = newString.join("");

  return newString;
};

// Do not edit below this line
module.exports = caesar;
