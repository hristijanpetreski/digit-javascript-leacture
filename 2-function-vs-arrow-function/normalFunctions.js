function add(a, b) {
  return a + b;
}

function betweenAddAndMultiply(a, b) {
  return add(a, b) + multiply(a, b);
}

function multiply(a, b) {
  return a * b;
}

console.log(betweenAddAndMultiply(5, 5));
