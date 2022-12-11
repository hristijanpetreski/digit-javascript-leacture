function addAndMultiply(a, b) {
  return function multiply(c) {
    return (a + b) * c;
  };
}

console.log(addAndMultiply(3, 2)(5));
