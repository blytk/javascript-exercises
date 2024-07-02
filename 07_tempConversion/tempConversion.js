// F to C
  // ºF = (x - 32) * 5/9 ºC
const convertToCelsius = function(fahrenheitDegrees) {
  const celsiusDegrees = (fahrenheitDegrees - 32) * (5 / 9);
  return Math.round(celsiusDegrees * 10) / 10;
};

// (x * 9 / 5 + 32 ºF)
const convertToFahrenheit = function(celsiusDegrees) {
  const fahrenheitDegrees = (celsiusDegrees * (9 / 5) + 32);
  return Math.round(fahrenheitDegrees * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
