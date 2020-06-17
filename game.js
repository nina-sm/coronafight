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
       // if(distance > 100) {
        this.y -= 1;
    }
    moveDown(){
      // if(distance > 100) {
        this.y += 1;
    }
    moveLeft(){
       // if(distance > 100) {
        this.x -= 1;
    }
    moveRight(){
       // if(distance > 100) {
        this.x += 1;
         
    }
 punches(){
    if (keyIsDown(71)) { 
       
        game.player1.image = game.player1KickRightImg;
        game.player1.isKickingRight = true;
      
       }
   /*  else {
            game.player1.image = game.player1Img;
         game.player1.isKickingRight = false;
        } */
  
      else if  (keyIsDown(70)) { 
        
        game.player1.image = game.player1KickLeftImg;
        game.player1.isKickingLeft = true;
       }

    /*     else {
     game.player1.image = game.player1Img;
         game.player1.isKickingLeft = false;
     } */
  
     else if  (keyIsDown(76)) {
        game.player2.image = game.player2KickRightImg;
        game.player2.isKickingRight = true;
       
      }

    //   else{
    //     game.player2.image = game.player2Img;
    //     game.player2.isKickingRight = false;
    // }
  
      else if  (keyIsDown(75)) {
        game.player2.image = game.player2KickLeftImg;
        game.player2.isKickingLeft = true;
         
      }

     else{
         game.player2.image = game.player2Img;
          game.player2.isKickingLeft = false;
            game.player2.isKickingRight = false;
            game.player1.image = game.player1Img;
            game.player1.isKickingLeft = false;
            game.player1.isKickingRight = false;

     }
  
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
this.punches()


  let distance = dist(this.player1.x,this.player1.y,this.player2.x,this.player2.y); 
  console.log(distance);
  if (distance < 100) { 

    //for each case - on the right and left side kicking left and right player 1 and 2 

    // Kicking for default postition Player 1 - - - - Player 2 

    if (this.player1.x<this.player2.x){
        if(this.player1.isKickingLeft==true){
               this.player2.receiveDamage(0);
            
         }
         if(this.player1.isKickingRight==true){
           this.player2.receiveDamage(1);
           
     }
         if(this.player2.isKickingRight==true){
           this.player1.receiveDamage(0);
            
         }
         if(this.player2.isKickingLeft==true){
           this.player1.receiveDamage(1);
          
         }
     
  }

    // Kicking for switched postition Player 2 - - - - Player 1
     
    if (this.player1.x>this.player2.x){
         if(this.player1.isKickingLeft==true){
                this.player2.receiveDamage(1);
               
          }
          if(this.player1.isKickingRight==true){
            this.player2.receiveDamage(0);
            
      }
          if(this.player2.isKickingRight==true){
            this.player1.receiveDamage(1);
            
          }
          if(this.player2.isKickingLeft==true){
            this.player1.receiveDamage(0);
           
          }
      }
     
 
    }


}

}