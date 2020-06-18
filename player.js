  
class Player { 
        constructor(playerImage,x,y,r,isKicking,health) {
            this.image=playerImage
            this.y=y
            this.x=x
            this.r=r
            this.isKicking = false
            this.health = 100 
        }
           
        moveUp(){ 
            if(this.y > 0)
            this.y -= 10;
        }
        moveDown(){ 
            if(this.y < 350)
            this.y += 10;
        }
        moveLeft(){ 
            if (this.x > -5)
            this.x -= 10;
        }
        moveRight(){ 
            if (this.x < 810)
            this.x += 10;
             
        }
receiveDamage(damage){
 
    if (this.health > 0)  {
         this.health -= damage 
        }

      else  {
  console.log(`Player has died in combat`);
  gameOver = true;     
}

}

          setup() {
            
          } 

         draw() { 
             image(this.image,this.x,this.y)
            
        } 
}
