import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-ball-canvas',
  templateUrl: './ball-canvas.component.html',
  styleUrls: ['./ball-canvas.component.scss']
})
export class BallCanvasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animateBalls();
  }

  animateBalls(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    let xPos = 100;
    let yPos = 100;
    const radius = 6;
    const gravity = 0.2;
    const damping = 0.6;
    const friction = 0.8;
    const balls = new Array();

    canvas.width = 600;
    canvas.height = 300;
    canvas.addEventListener('click', handleClick);

    drawCanvas();

    function drawCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(drawCanvas);
     
      if (balls) {
        balls.forEach((ball) => {
          if (ball.xPos + radius >= canvas.width) {
            // ball hits right wall
            ball.vx = -ball.vx * damping;
            ball.xPos = canvas.width - radius;
          } else if (ball.xPos - radius <= 0) {
            // ball hits left wall
            ball.vx = -ball.vx * damping;
            ball.xPos = radius;
          }

          if (ball.yPos + radius >= canvas.height) {
            // ball hits bottom
            ball.vy = -ball.vy * damping;
            ball.yPos = canvas.height - radius;
            ball.vx *= friction;
          } else if (ball.yPos - radius <= 0) {
            // ball hits top
            ball.vy = -ball.vy * damping;
            ball.yPos = radius;
          }

          ball.vy += gravity;
          ball.xPos += ball.vx;
          ball.yPos += ball.vy;

          ctx.beginPath();
          ctx.arc(ball.xPos, ball.yPos, radius, 0, 2 * Math.PI, false);
          ctx.fillStyle = 'black';
          ctx.fill();
        });
      }
    }

    const Ball = function(xPosition: number, yPosition: number) {
      this.direction = Math.random() * Math.PI * 2;
      this.xPos = xPosition;
      this.yPos = yPosition;
      this.vx = (Math.random() - 0.5) * 4;
      this.vy = -(Math.random()) * 4;
    };

    function handleClick(e) {
      xPos = e.pageX - canvas.offsetLeft;
      yPos = e.pageY - canvas.offsetTop;

      const newBall = new Ball(xPos, yPos);
      balls.push(newBall);
    }
  }
}
