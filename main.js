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
    if (keyIsDown(87)) { 
        
      game.player1.moveUp();
    }
   else  if (keyIsDown(68)) {
    game.player1.moveRight();
    }
  
    else if (keyIsDown(65)) {
      game.player1.moveLeft();
    }
  
    else  if (keyIsDown(83)) {
      game.player1.moveDown();
    }
  
    
  
    else  if (keyIsDown(37)) {
      game.player2.moveLeft();
    }
  
    else if (keyIsDown(38)) {
      game.player2.moveUp();
    }
  
    else if (keyIsDown(39)) {
      game.player2.moveRight();
    }
  
    else  if (keyIsDown(40)) {
      game.player2.moveDown();
    }
 
  }

  function keyPressed(){
    
     if (keyCode === 71) { 
       
      game.player1.image = game.player1KickRightImg;
      game.player1.isKicking = true
     }

     if (keyCode === 70) { 
      
      game.player1.image = game.player1KickLeftImg;
      game.player1.isKicking = true
     }

     else  if (keyCode === 76) {
      game.player2.image = game.player2KickRightImg;
      game.player2.isKicking = true;
    }

    else  if (keyCode === 75) {
      game.player2.image = game.player2KickLeftImg;
      game.player2.isKicking = true;
    }


  }

  //if (player1.x === player2.x && player1.y === player2.y)