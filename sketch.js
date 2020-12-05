
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground1;
var boy;
var boyImage;
var tree1;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;
var stone1;
var slingshot1;




function preload()
{
	boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	boy=createSprite(200,500,20,20)
	boy.addImage(boyImage)
	boy.scale=0.1
	//Create the Bodies Here
	ground1=new ground(0,545)
	tree1=new tree(650,300,10,10)
	mango1=new mango(700,200,50,50)
	mango2=new mango(450,250,50,50)
	mango3=new mango(680,240,50,50)
	mango4=new mango(600,260,50,50)
	mango5=new mango(675,150,50,50)
	mango6=new mango(730,270,50,50)
	mango7=new mango(500,220,50,50)
	mango8=new mango(600,150,50,50)
	stone1=new stone(200,200,50,50)
	slingshot1=new slingshot(stone1.body,{x:150,y:415})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  




  ground1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone1.display();
  slingshot1.display();

  
  drawSprites();
 
}

function mouseDragged(){
    
        Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    
}
function mouseReleased(){
    slingshot1.fly();
    
}







