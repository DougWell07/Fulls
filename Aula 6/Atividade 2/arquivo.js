let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,70,70);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(330,0,70,70);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.fillRect(360,310,40,90);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.fillRect(310,360,50,40);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,310,40,90);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,360,90,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'RGB(0, 255, 255)';
ctx.fillRect(0,150,40,80);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'RGB(0, 255, 255)';
ctx.fillRect(360,170,40,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'RGB(0, 255, 255)';
ctx.strokeStyle = 'blue';
ctx.arc(200,170,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'RGB(0, 255, 255)';
ctx.strokeStyle = 'green';
ctx.arc(200,400,60,1*Math.PI,0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(110,280,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(280,280,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();
