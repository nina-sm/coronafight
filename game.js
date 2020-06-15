class Game {
    constructor() {
        this.x = 0;
        this.y = 0;
      this.background = new Background();
      this.player = new Player(); 
    }  
     
 doSomething() {
        clear();
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
}