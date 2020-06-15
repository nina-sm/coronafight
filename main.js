console.log("hello world ");
const game = new Game();
// these three function are p5 created and they are being called from p5 library! :)


function setup() {
    createCanvas(windowWidth, windowHeight);
    
    landscape = loadImage('assets/green-field.jpg');   
    playerImg = loadImage("assets/putin.png");
    playerKickLeftImg = loadImage("assets/putin-kick-left.png");
    playerKickRightImg = loadImage("assets/putin-kick-right.png"); 
  } 
  
  function draw() { 
      image(landscape, 0, 0); 
      
      image(playerImg, 100, 100, 137, 235);
  } 
   
  
function keyPressed() {
  if (keyCode == 32) { 
    game.player1.kick();
  }
  if (keyCode == 87) { 
    game.player1.moveUp();
  }
  if (keyCode == 68) {
    game.player1.moveRight();
  }

  if (keyCode == 65) {
    game.player1.moveLeft();
  }

  if (keyCode == 83) {
    game.player1.moveDown();
  }

  if (keyCode == 76) {
    game.player2.kick();
  }

  if (keyCode == 37) {
    game.player2.moveLeft();
  }

  if (keyCode == 38) {
    game.player2.moveUp();
  }

  if (keyCode == 39) {
    game.player2.moveRight();
  }

  if (keyCode == 40) {
    game.player2.moveDown();
  }

}