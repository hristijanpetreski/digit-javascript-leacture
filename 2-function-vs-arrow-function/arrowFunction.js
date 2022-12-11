const add = (a, b) => {
  return a + b;
};

const betweenAddAndMultiply = (a, b) => {
  return add(a, b) + multiply(a, b);
};

const multiply = (a, b) => {
  return a * b;
};

console.log(betweenAddAndMultiply(5, 5));
