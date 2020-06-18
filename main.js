console.log("hello world ");
let player1Hurt, player2Hurt;
const game = new Game(); 

function preload(){
    game.preload()
}
function setup() {

  //let player1Hurt = loadSound('assets/putin-hurt.mp3');
  //let player2Hurt = loadSound('assets/corona-hurt.mp3');
  //let player1Punch = loadSound('assets/punch.mp3');
  //let player2Punch = loadSound('assets/corona-punch.mp3');
  //let player1Wins = loadSound('assets/putin-wins.mp3');
  //let player2Wins = loadSound('assets/corona-wins.mp3');
  
  let canvas = createCanvas(windowWidth, windowHeight);

  canvas.position(350,650)

   game.setup()
    
  } 
  

  function draw() { 
game.drawGame() 

// ************************************************* Display Health 

document.getElementById("health1").innerHTML = `Health: ${game.player1.health}`;  
  document.getElementById("health2").innerHTML = `Health: ${game.player2.health}`;  

  } 
 

 