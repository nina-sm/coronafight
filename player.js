  
class Player { 
        constructor(playerImage,x,y) {
            this.image=playerImage
            this.y=y;
            this.x=x
        }
          
       kick(){
          this.image = playerKickRightImg;
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

          setup() {
            
          } 

         draw() { 
             image(this.image,this.x,this.y)
            
        } 
}