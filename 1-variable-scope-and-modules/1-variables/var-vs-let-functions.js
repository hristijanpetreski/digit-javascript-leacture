var x = 6;
let y = 4;

function getValueX() {
  var x = 9;
  console.log('getValueX():', x);
}

function getValueY() {
  let y = 2;
  console.log('getValueY():', y);
}

getValueX();
console.log('Value for X:', x);
getValueY();
console.log('Value for Y:', x);
