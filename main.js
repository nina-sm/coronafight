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
   