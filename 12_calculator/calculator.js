const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let suma = 0;
  arr.forEach(element => {
    suma += element;
  });

  return suma;
};

const multiply = function (arr) {
  let prod = 1;
  arr.forEach(element => {
    prod *= element;
  });

  return prod;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a == 0) return 1;

  let prod2 = 1;
  for (let i = 1; i <= a; i++)
    prod2 *= i;

  return prod2;
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
