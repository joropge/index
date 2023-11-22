import { Ball } from "./balls-class.js";
import { width } from "./canvas-setup.js";
import { height } from "./canvas-setup.js";
import { random } from "./canvas-setup.js";
import { loop } from "./canvas-setup.js";

export const balls = [];

const fillBall = (numBall) => {
  while (balls.length < numBall) {
    const size = random(10, 20);
    const ball = new Ball(
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(-7, 7),
      random(-7, 7),
      size
    );

    balls.push(ball);
  }
};
fillBall(4);
loop();
