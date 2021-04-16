
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1100, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100, 100, 30);
	
	ground = new Ground(550, 250, 20, 1100);
	
	dustbin1= new Dustbin(900, height-50, 200, 20);
	dustbin2=new Dustbin(800, 210, 20, 100);
	dustbin3=new Dustbin(1000, 210, 20, 100);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display(); 
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:85, y:-85} );
	}
}


