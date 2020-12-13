class Polygon {
    constructor(x, y, width,height) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.6,
          'isStatic':false
          
      }
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height = height;
     // this.radius = radius
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
       translate(pos.x, pos.y);
       rotate(angle);
       fill(255);
       imageMode(CENTER);
       image(this.image,0,0,this.width,this.height)
       pop();
    }
  };