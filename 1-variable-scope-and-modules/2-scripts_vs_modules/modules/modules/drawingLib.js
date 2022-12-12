const canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function drawRectangle(color, x, y, w, h) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawCircle(color, x, y, r) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

export { drawCircle, drawRectangle };
