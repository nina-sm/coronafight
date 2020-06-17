class Game {
    constructor() {
        this.x = 0;
        this.y = 0;
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



  let distance = dist(this.player1.x,this.player1.y,this.player2.x,this.player2.y);
  console.log(distance);
  if (distance < 90) { 

    //for each case - on the right and left side kicking left and right player 1 and 2 
      if (this.player1.x>this.player2.x){
         if(this.player1.isKickingLeft==true){
                this.player2.receiveDamage(0)
          }
          this.player2.isKickingRight
      }
    if (this.player1.isKicking === true) {  // ERROR: player1 is undefined
        this.player2.receiveDamage(0);
      }
    
      if (this.player2.isKicking === true) { // ERROR: player1 is undefined
        this.player1.receiveDamage(0);
      }
  }

 
    }


   

}