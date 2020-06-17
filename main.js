console.log("hello world ");
const game = new Game(); 

function preload(){
    game.preload()
}
function setup() {
  //to ADD: borders on the canvas 
  createCanvas(windowWidth, windowHeight);


   // createCanvas(2368, 1000);  // this is background image sizes
    game.setup()
    
  } 
  

  function draw() { 
game.drawGame() 

// ************************************************* Display Health 

document.getElementById("health1").innerHTML = `Health: ${game.player1.health}`;  
  document.getElementById("health2").innerHTML = `Health: ${game.player2.health}`;  

//************************************************* Players moving around 

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

  // ************************************************* Players kicking 

  // ADD: kicking has to last only for 0.1 second and return back to the default player image 
  

  function keyPressed(){
    console.log(keyCode)
    

  }


// ************************************************* Receive Damage

console.log(game.player.health); 
console.log(game.player.isKicking);
 
/*
  if (game.player1.isKickingLeft === true && game.player1.intersects(game.player2)) {  
    game.player2.receiveDamage();
  }

  if (game.player2.isKicking === true && game.player1.intersects(game.player2)) { 
    game.player1.receiveDamage();
  } */

  //************************************************* Players should not intersect 
 
  // left side and right side collision. if this is happening then you are not able to move. check every time he moves if there is a collision 
    
  
  
 

 