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
  
  let canvas = createCanvas(windowWidth, windowHeight);


  canvas.position(350,650)


   game.setup()
    
  } 
  

  function draw() { 

    if (gameOver == false){
game.drawGame() 
} else { 
 image(game.gameOverImg,0,0);
 document.getElementById("restart").style.display = "flex";
}
// ************************************************* Display Health 

document.getElementById("health1").innerHTML = `Health: ${game.player1.health}`;  
  document.getElementById("health2").innerHTML = `Health: ${game.player2.health}`;  

  } 
 

 function restart() {
   gameOver = false;
   game.player1.health = 100;
   game.player2.health = 100;
   document.getElementById("restart").style.display = "none";
 }