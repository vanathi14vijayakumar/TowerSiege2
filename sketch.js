
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var box,box2,box3,box4,box5
var box6,box7,box8,box9,box10

var block,block2,block3,block4,block5,block6,block7,block8,block9
var ground,ground2;

var polygon,sling;

function preload()
{
	polygonImage = loadImage("polygon.png")
}

function setup() {
	createCanvas(1000, 640);


	engine = Engine.create();
	world = engine.world;

	//polygon = Bodies.circle(100,370,20);
	//World.add(world,polygon)

	//level 1
	box = new Block(730,320,30,40)
	box2 = new Block (760,320,30,40)
	box3 = new Block(790,320,30,40)
	box4 = new Block(820,320,30,40)
	box5 = new Block(850,320,30,40)

	//level 2
	box6 = new Block (760,280,30,40)
	box7 = new Block(790,280,30,40)
	box8 = new Block(820,280,30,40)
	
	//Top
	box9 = new Block(790,240,30,40);

	//{level} 1
	block = new Block(500,370,30,40)
	block2 = new Block(530,370,30,40)
	block3 = new Block(560,370,30,40)
	block4 = new Block(590,370,30,40)
	block5 = new Block(620,370,30,40)
	
	//level2 
    block6 = new Block(530,330,30,40)
	block7 = new Block(560,330,30,40)
	block8 = new Block(590,330,30,40)
	//top
	block9 = new Block(560,290,30,40)
    
	ground = new Ground(790,350,230,9)
	ground2 = new Ground(560,390,230,9)

	polygon = new Polygon(100,370,50,50)
	sling = new Slingshot(polygon.body,{x:200,y:370});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(214,126,142)

 /* push();
        translate(polygon.position.x, polygon.position.y);
        rotate(polygon.angle);
        fill(102,204,255)
        imageMode(CENTER);
        image( 100,370, polygon.radius);
        pop();*/
  
  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  polygon.display();
  sling.display();

  ground.display();
  ground2.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
	}

function mouseReleased(){
	sling.fly();
}

function keyPressed(){
	if(keyCode ==32){
		Matter.Body.setPosition(polygon.body,{x:150,y:370})
		sling.attach(polygon.body);
	}
}