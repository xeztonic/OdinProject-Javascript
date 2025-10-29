const convertToCelsius = function (fahGrades) {
  const result = (fahGrades - 32) * (5 / 9);
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function (celGrades) {
  const result = celGrades * (9 / 5) + 32;
  return Math.round(result * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
