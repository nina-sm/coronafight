console.log("hello world ");
let player1Hurt, player2Hurt, player1Punch, player2Punch, player1Wins, player2Wins;
let gameOver = false;
const game = new Game(); 


function preload(){
    game.preload()
}
function setup() {

   player1Hurt = loadSound('assets/putin-hurt.mp3');
   player2Hurt = loadSound('assets/corona-hurt.mp3');
   player1Punch = loadSound('assets/punch.mp3');
   player2Punch = loadSound('assets/corona-punch.mp3');
   player1Wins = loadSound('assets/putin-wins.mp3');
   player2Wins = loadSound('assets/corona-wins.mp3');
   gameOverSound = loadSound('assets/game-over.mp3');
  
  let canvas = createCanvas(windowWidth, windowHeight);


  canvas.position(400,700)


   game.setup()
    
  } 
  

  function draw() { 

    if (gameOver == false){
game.drawGame() 
} else { 
 
 document.getElementById("restart").style.display = "flex";
 
 if (game.player1.health == 0) {
  image(game.player1Defated,100,50);
   console.log("corona wins")
   if (!player2Wins.isPlaying()) player2Wins.play()
  }
 else {
  image(game.player2Defated,100,50);
   console.log("putin wins")
   let gameOverMusic = true;
   if (!player1Wins.isPlaying() && gameOverMusic === true) {
     player1Wins.play()
     gameOverMusic = false
   }
  }
 
 
// let gameOverMusic = true;
//   if(gameOverMusic === true && !gameOverSound.isPlaying()) {
//     gameOverMusic = false;
//    gameOverSound.loop = false;
//     gameOverSound.play();   
//   } 

  
}

// ************************************************* Display Health 

document.getElementById("health1").innerHTML = `Health: ${game.player1.health}`;  
  document.getElementById("health2").innerHTML = `Health: ${game.player2.health}`;  


  } 
 

 function restart() {
   gameOver = false;
   game.player1.health = 100;
   game.player2.health = 100;
   game.player1.x = 100;
   game.player2.x = 700;
   document.getElementById("restart").style.display = "none";
 }

 /* 

 THINGS TO FIX: 

- collisions 
- game over repeating sound 
- HTML positioning 
- recurring punches 

THINGS TO ADD: 

- jumping
- more players
- AI 

 */