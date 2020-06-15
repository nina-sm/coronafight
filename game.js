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
    this.virusIMG=loadImage("assets/virus.png")
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

        this.player1 = new Player(this.playerImg,100,100);
        this.player2 = new Player(this.virusIMG,500,100);
    }
    drawGame(){
        this.background.draw()
        this.player1.draw()
        this.player2.draw()
    }
}