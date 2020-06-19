  
class Player { 
        constructor(playerImage,x,y,r,isKicking,health) {
            this.image=playerImage
            this.y=y
            this.x=x
            this.r=r
            this.isKicking = false
            this.health = 100 
            this.d=500
        }
           
        moveUp(){ 
            if(this.y > 0  ){
                
                this.y -= 10;
                console.log(this.d)
                if(this.d<150){
                    this.y+=20
                }
            }
           
        }
        moveDown(){ 
            if(this.y < 350)
            this.y += 10;
            if(this.d<170){
                this.y-=20
            }
        }
        moveLeft(){ 
            if (this.x > -5 )
            this.x -= 10;
            if(this.d<170){
                this.x+=20
            }
        }
        moveRight(){ 
            if (this.x < 810 )
            this.x += 10;
            if(this.d<170){
                this.x-=20
            }
             
        }
receiveDamage(damage){
 
    if (this.health > 0)  {
         this.health -= damage 
        }

      else  { 
  gameOver = true;     
}

}

          setup() {
            
          } 

         draw() { 
             image(this.image,this.x,this.y)
            // fill("red")
            // circle(this.x+this.image.width/2,this.y+this.image.height/2,10)
            
        } 

        
  checkCollision(object) {
      this.d=dist(object.x+object.image.width/2,object.y+object.image.height/2, this.x+this.image.width/2,this.y + this.image.height/2)
      
    console.log(this.d)
  }
}
