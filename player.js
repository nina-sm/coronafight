  
class Player { 
        constructor(playerImage,x,y,r,isKicking,health) {
            this.image=playerImage
            this.y=y
            this.x=x
            this.r=r
            this.isKicking = false
            this.health = 1000 
        }
           
    
    
        moveUp(){
           // if(game.distanceY > 100) {
            this.y -= 10;
        }
        moveDown(){
           // if(game.distanceY > 100) {
            this.y += 10;
        }
        moveLeft(){
          //  if(game.distanceX > 100) {
            this.x -= 10;
        }
        moveRight(){
          //  if(game.distanceX > 100) {
            this.x += 10;
             
        }
receiveDamage(damage){
   
    console.log("punches are happening")
    if (this.health > 0)  {
         this.health -= damage
         return `Player has received 10 points of damage`
        }
         else return `Player has died in combat`;
    
}
          setup() {
            
          } 

         draw() { 
             image(this.image,this.x,this.y)
            
        } 
}