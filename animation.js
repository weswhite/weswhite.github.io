var canvas = document.querySelector("#canvas");
canvas.height = window.innerHeight
canvas.width = window.innerWidth
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height);

var ball = {
    x: 0,
    y: canvas.height/2,
    radius: 50,
    speed_x: .8,
    speed_y: .1,
    angle: 0,
    color: 'white'
}

function draw() {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, false);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
  ball.y = (canvas.height / 2 + Math.sin(radians(ball.angle)) * canvas.height / 2) - 60;
  ball.x = (canvas.height/ 2 + Math.cos(radians(ball.angle)) * canvas.height / 2) + canvas.width / 3;
  ball.angle += ball.speed_x
}

(function update() {
  draw();
  requestAnimationFrame(() =>{
    update();
  });
}());

function radians (angle) {
  return angle * (Math.PI / 180);
}