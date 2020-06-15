class Game {
    constructor() {
        this.x = 0;
        this.y = 0;
      this.player = new Player(); 
    }  
     
 doSomething() {
        clear();
        
    }
    
    preload(){
    this.landscape = loadImage('assets/city.png');   
    this.playerImg = loadImage("assets/putin.png");
    this.playerKickLeftImg = loadImage("assets/putin-kick-left.png");
    this.playerKickRightImg = loadImage("assets/putin-kick-right.png"); 
    this.virusImg=loadImage("assets/coronavirus.png");
    this.virusKickLeftImg = loadImage("assets/corona-kick-left.png");
    this.virusKickRightImg = loadImage("assets/corona-kick-right.png");
    }
    
    moveUp(){
        this.y -= 10;
    }
    moveDown(){
        this.y += 10;
    }
    moveLeft(){
        this.x -= 10;
    }
    moveRight(){
        this.x += 10;
         
    }

    setup(){
        this.background = new Background();

        this.player1 = new Player(this.playerImg,150,200);
        this.player2 = new Player(this.virusImg,700,200);
    }
    drawGame(){
        this.background.draw()
        this.player1.draw()
        this.player2.draw()
    }

    
  
keyPressed() {
    if (keyCode == 32) { 
      
        this.player1.kick();
    }
    if (keyIsDown == 87) { 
      this.player1.moveUp();
    }
    if (keyIsDown == 68) {
        this.player1.moveRight();
    }
  
    if (keyIsDown == 65) {
        this.player1.moveLeft();
    }
  
    if (keyIsDown == 83) {
        this.player1.moveDown();
    }
  
    if (keyCode == 76) {
        this.player2.kick();
    }
  
    if (keyIsDown == 37) {
        this.player2.moveLeft();
    }
  
    if (keyIsDown == 38) {
        this.player2.moveUp();
    }
  
    if (keyIsDown == 39) {
        this.player2.moveRight();
    }
  
    if (keyIsDown == 40) {
        this.player2.moveDown();
    }
  
  }
}