const ftoc = function (tempInFarenheit) {
  tempInCelcius = (tempInFarenheit - 32) * (5 / 9);
  return Math.round(tempInCelcius * 10) / 10;
};

const ctof = function (tempInCelcius) {
  tempInFarenheit = tempInCelcius * (9 / 5) + 32;

  return Math.round(tempInFarenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
