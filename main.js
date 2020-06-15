console.log("hello world ");
const game = new Game();
// these three function are p5 created and they are being called from p5 library! :)

function preload(){
    game.preload()
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    game.setup()
    
  } 
  
  function draw() { 
game.drawGame()
  } 
   
  
function keyPressed() {
  if (keyCode == 32) { 
    game.player1.kick();
  }
  if (keyIsDown == 87) { 
    game.player1.moveUp();
  }
  if (keyIsDown == 68) {
    game.player1.moveRight();
  }

  if (keyIsDown == 65) {
    game.player1.moveLeft();
  }

  if (keyIsDown == 83) {
    game.player1.moveDown();
  }

  if (keyCode == 76) {
    game.player2.kick();
  }

  if (keyIsDown == 37) {
    game.player2.moveLeft();
  }

  if (keyIsDown == 38) {
    game.player2.moveUp();
  }

  if (keyIsDown == 39) {
    game.player2.moveRight();
  }

  if (keyIsDown == 40) {
    game.player2.moveDown();
  }

}