import { drawRectangle, drawCircle } from './modules/drawingLib.js';
import { drawRectangle as function2 } from './modules/otherLib.js';

drawRectangle('green', 0, 0, 200, 100);
drawCircle('blue', 300, 300, 200);
drawRectangle('red', 300 - 25, 300 - 25, 50, 50);
function2();
