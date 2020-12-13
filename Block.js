class Block extends Blassclass{
    constructor(x, y, width, height, angle) {
      super(x,y,width,height);
   
    this.visiblity = 255   
    }
    display(){
   
     
      push ()
      if(this.body.speed<3){
        super.display()
      }
      else{
  
        World.remove(world,this.body);
        this.visiblity = this.visiblity-5
        tint (0,0,255,this.visiblity)
  
       // rect (this.body.position.x,this.body.position.y,this.width,this.height)
      pop ();
      }
    }
  };