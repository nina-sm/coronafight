console.log("hello world ");
const game = new Game(); 

function preload(){
    game.preload()
}
function setup() {
  //to ADD: borders on the canvas 
  let canvas = createCanvas(windowWidth, windowHeight);

  canvas.position(350,600)

   // createCanvas(2368, 1000);  // this is background image sizes
    game.setup()
    
  } 
  

  function draw() { 
game.drawGame() 

// ************************************************* Display Health 

document.getElementById("health1").innerHTML = `Health: ${game.player1.health}`;  
  document.getElementById("health2").innerHTML = `Health: ${game.player2.health}`;  

  } 
 

 