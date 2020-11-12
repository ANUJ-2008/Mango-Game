
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	mangoTree=loadImage("tree.png")
	mangoImage=loadImage("mango.png")
}

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy=new Boy(300,100,20,20)

	

	ground = new Ground(200,height,800,20)

	tree=createSprite(610,510,20,20)
	tree.addImage(mangoTree)
	tree.scale=0.3

	mango=createSprite(620,490,20,20)
	mango.addImage(mangoImage)
	mango.scale=0.1

	mango2=createSprite(500,450,20,20)
	mango2.addImage(mangoImage)
	mango2.scale=0.1



	mango3=createSprite(680,450,20,20)
	mango3.addImage(mangoImage)
	mango3.scale=0.1


	mango4=createSprite(600,410,20,20)
	mango4.addImage(mangoImage)
	mango4.scale=0.1


	mango5=createSprite(670,400,20,20)
	mango5.addImage(mangoImage)
	mango5.scale=0.1


	
	
	
	


	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("pink");
  
  drawSprites();

  boy.display();
 
}



