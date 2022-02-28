// Modified from https://codepen.io/nanonansen/pen/oRWmaY
// Yes, this code is cursed. Might refactor later..

const ball1 = document.querySelector("div.ball1");
const ball2 = document.querySelector("div.ball2");
const ball3 = document.querySelector("div.ball3");
const ball4 = document.querySelector("div.ball4");


let mouseX = 0;
let mouseY = 0;

let ballX1 = 0;
let ballY1 = 0;

let ballX2 = 0;
let ballY2 = 0;

let ballX3 = 0;
let ballY3 = 0;

let ballX4 = 0;
let ballY4 = 0;

let speed1 = 0.04;
let speed2 = 0.08;
let speed3 = 0.16;
let speed4 = 0.32;


function animate(){
  
    let distX1 = mouseX - ballX1;
    let distY1 = mouseY - ballY1;

    let distX2 = mouseX - ballX2;
    let distY2 = mouseY - ballY2;
    
    let distX3 = mouseX - ballX3;
    let distY3 = mouseY - ballY3;

    let distX4 = mouseX - ballX4;
    let distY4 = mouseY - ballY4;
    
    
    ballX1 = ballX1 + (distX1 * speed1);
    ballY1 = ballY1 + (distY1 * speed1);

    ballX2 = ballX2 + (distX2 * speed2);
    ballY2 = ballY2 + (distY2 * speed2);

    ballX3 = ballX3 + (distX3 * speed3);
    ballY3 = ballY3 + (distY3 * speed3);

    ballX4 = ballX4 + (distX4 * speed4);
    ballY4 = ballY4 + (distY4 * speed4);
    
    ball1.style.left = ballX1 + "px";
    ball1.style.top = ballY1 + "px";

    ball2.style.left = ballX2 + "px";
    ball2.style.top = ballY2 + "px";

    ball3.style.left = ballX3 + "px";
    ball3.style.top = ballY3 + "px";

    ball4.style.left = ballX4 + "px";
    ball4.style.top = ballY4 + "px";
  
  requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
})