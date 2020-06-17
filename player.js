  
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
receiveDamage(damage){
    this.health -= damage;
    console.log("punches are happening")
    if (this.health > 0) return `Player has received 10 points of damage`; else return `Player has died in combat`;
    console.log('ouch')
}
          setup() {
            
          } 

         draw() { 
             image(this.image,this.x,this.y)
            
        } 
}