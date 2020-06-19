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
    this.player1Defated = loadImage("assets/putin-defeated2.png");
    this.player2Img=loadImage("assets/coronavirus.png");
    this.player2KickLeftImg = loadImage("assets/corona-kick-left.png");
    this.player2KickRightImg = loadImage("assets/corona-kick-right.png");
    this.player2Defated = loadImage("assets/corona-defeated1.png");
    }
    

    // create keypressed for just sounds // not working 


   keyPressed() {
      if (keyCode === 70 && !player1Punch.isPlaying()) {
        player1Punch.play();
      }

      if (keyCode === 71) {
        player1Punch.play();
      }
      if (keyCode === 76) {
        player2Punch.play();
      }
      if (keyCode === 75) {
        player2Punch.play();
      }
   }
  
 punches(){
    if (keyIsDown(71)) { 
       
        game.player1.image = game.player1KickRightImg;
        game.player1.isKickingRight = true;
        if (!player1Punch.isPlaying()) player1Punch.play();
       } 

      else if  (keyIsDown(70)) { 
        
        game.player1.image = game.player1KickLeftImg;
        game.player1.isKickingLeft = true;
        if (!player1Punch.isPlaying()) player1Punch.play();
       }
 
  
     else if  (keyIsDown(76)) {
        game.player2.image = game.player2KickRightImg;
        game.player2.isKickingRight = true;
        if (!player2Punch.isPlaying()) player2Punch.play();
       
      } 
  
      else if  (keyIsDown(75)) {
        game.player2.image = game.player2KickLeftImg;
        game.player2.isKickingLeft = true;
        if (!player2Punch.isPlaying()) player2Punch.play();
         
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

 
// MOving 

  move1() {
 if (keyIsDown(87)) { 
  this.player1.moveUp();
}

else  if (keyIsDown(68)) {
this.player1.moveRight();
}

else if (keyIsDown(65)) {
  this.player1.moveLeft();
}

else  if (keyIsDown(83)) {
  this.player1.moveDown();
}
  }
move2() {
  if (keyIsDown(37)) {
  this.player2.moveLeft();
}

else if (keyIsDown(38)) {
  this.player2.moveUp();
}

else if (keyIsDown(39)) {
  this.player2.moveRight();
}

else  if (keyIsDown(40)) {
  this.player2.moveDown();
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
        this.move1()
        this.move2()

        this.player1.checkCollision(this.player2);
        this.player2.checkCollision(this.player1)

  let distance = dist(this.player1.x+this.player1.image.width/2,this.player1.y+this.player1.image.height/2,this.player2.x+this.player2.image.width/2, this.player2.y + this.player2.image.height/2); 
  
  if (distance < 180) { 

    //for each case - on the right and left side kicking left and right player 1 and 2 

    // Kicking for default postition Player 1 - - - - Player 2 

    if (this.player1.x<this.player2.x){
        if(this.player1.isKickingLeft==true){
               this.player2.receiveDamage(0); 
            
         }
         if(this.player1.isKickingRight==true){
           this.player2.receiveDamage(1);
           if (!player2Hurt.isPlaying()) player2Hurt.play();
           
     }
         if(this.player2.isKickingRight==true){
           this.player1.receiveDamage(0);
            
         }
         if(this.player2.isKickingLeft==true){
           this.player1.receiveDamage(1);
           if (!player1Hurt.isPlaying()) player1Hurt.play();
         }
     
  }

    // Kicking for switched postition Player 2 - - - - Player 1
     

    if (this.player1.x>this.player2.x){
      if(this.player1.isKickingLeft==true){
             this.player2.receiveDamage(1);
             if (!player2Hurt.isPlaying()) player2Hurt.play();
       }
       if(this.player1.isKickingRight==true){
         this.player2.receiveDamage(0);
         
   }
       if(this.player2.isKickingRight==true){
         this.player1.receiveDamage(1);
         if (!player1Hurt.isPlaying()) player1Hurt.play();
       }
       if(this.player2.isKickingLeft==true){
         this.player1.receiveDamage(0);
        
       }
   }
 
    }


}

      


}