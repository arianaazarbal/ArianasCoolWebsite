function initializeAnimation() {
  window.requestAnimationFrame(draw);
}
var yChange = 0;
var dY = -1;
var xChange =0;
var dX = 1;
var rotation = 0;
function drawArt(ctx) {

  ctx.strokeRect(-70+xChange, -100, 200, 200);

  ctx.beginPath();
  ctx.arc(150+xChange, -100, 100, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.fill();
  // ctx.lineTo(81.6, 2.0);
  // ctx.lineTo(235.3, 2.0);
  // ctx.lineTo(157.9, 145.0);
  ctx.closePath();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
  // ctx.rotate(Math.pi()/2);

  ctx.save();
  ctx.beginPath();
  ctx.translate(50,40);
  ctx.rotate(rotation);
  ctx.moveTo(0,0);
  ctx.lineTo(-50,60);
  ctx.lineTo(0,120);
  ctx.lineTo(50,60);
  ctx.lineTo(0,0);
  ctx.stroke();
  ctx.restore();

  ctx.beginPath();
  ctx.arc(320+xChange, yChange+270, 400, Math.PI, Math.PI*3/2, false);
  ctx.stroke();


  yChange+=dY;
  if(yChange<=-50)
  {
    dY = 1;
  }
  else if(yChange>=50)
  {
    dY= -1;
  }
  xChange+=dX;
  if(xChange>=50)
  {
    dX=-1;
  }
  else if(xChange<=-50)
  {
    dX=1;
  }
  rotation+=0.05;
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 700); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';

  ctx.save();
  ctx.lineWidth = 5;
  ctx.translate(450, 250);
  drawArt(ctx);
  ctx.restore();


  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}

initializeAnimation();

setInterval(draw(),10);
