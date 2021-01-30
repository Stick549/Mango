
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4,mango5, rock1;
var world,boy, slingslot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
//440, 270

  mango1=new mango(1100,100,30);
  mango2=new mango(1000,100,30);
  mango3=new mango(1100,45,30);
  mango4=new mango(1220,170,30);
  mango5=new mango(1100,200,30);
	rock1 = new rock(400, 50, 50)
	treeObj=new tree(1050,580);
  groundObject=new ground(width/2,600,width,20);
  slingslot = new slingshot(rock1.body, {x:220, y:430})
	
	Engine.run(engine);
  
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  slingslot.display()
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  rock1.display();
  groundObject.display();
  detectollision(rock1, mango1)
  detectollision(rock1, mango2)
  detectollision(rock1, mango3)
  detectollision(rock1, mango4)
  detectollision(rock1, mango5)

  if (mouseIsPressed){
    
}
}
function mouseDragged(){
  Matter.Body.setPosition(rock1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingslot.fly();
}
function keyPressed(){
if(keyCode===32){
  slingslot.attach(rock1.body);
  
}
}
function detectollision(rock, mango){
  mangoPos= mango.body.position
  rockPos = rock.body.position
  var distance = dist(rockPos.x,rockPos.y,mangoPos.x,mangoPos.y)
  if(distance<=30+50){
    Matter.Body.setStatic(mango.body, false)
  }
}
