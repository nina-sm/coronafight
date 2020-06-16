class Game {
    constructor() {
        this.x = 0;
        this.y = 0;
      this.player = new Player(); 
    }  
      
    
    preload(){
    this.landscape = loadImage('assets/city.png');   
    this.player1Img = loadImage("assets/putin.png");
    this.player1KickLeftImg = loadImage("assets/putin-kick-left.png");
    this.player1KickRightImg = loadImage("assets/putin-kick-right.png"); 
    this.player2Img=loadImage("assets/coronavirus.png");
    this.player2KickLeftImg = loadImage("assets/corona-kick-left.png");
    this.player2KickRightImg = loadImage("assets/corona-kick-right.png");
    }
    
    moveUp(){
        this.y -= 1;
    }
    moveDown(){
        this.y += 1;
    }
    moveLeft(){
        this.x -= 1;
    }
    moveRight(){
        this.x += 1;
         
    }
 

    setup(){
        this.background = new Background();

        this.player1 = new Player(this.player1Img,150,200);
        this.player2 = new Player(this.player2Img,700,200);
    }
    drawGame(){
        this.background.draw()
        this.player1.draw()
        this.player2.draw()
    }

    
  

}