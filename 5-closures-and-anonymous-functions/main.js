function addAndMultiply(a, b) {
  let randomValue = 5;

  return function multiply(c) {
    return (a + b) * c + randomValue;
  };
}

const multiply = addAndMultiply(3, 2);
console.log(multiply(5));
console.log(multiply(7));
console.log(multiply(9));

// console.log(addAndMultiply(3, 2));
