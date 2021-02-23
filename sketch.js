
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1;
var rope1;

function preload()
{	
}

function setup() {
	createCanvas(750, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var roofX = 375;
	var roofY = 50;
	var roofW = 400;
	var roofH = 30;
	roof = new Roof(roofX, roofY, roofW, roofH);

	var bobRadius = 20;
//	var bobDia = bobRadius*2;
	var bobDia = 50; // TODO : for radius 20, circles touch at 50. Why???
	var bobYPos = 400;
    bob1 = new bob(roofX-bobDia*3, bobYPos, bobRadius);
    bob2 = new bob(roofX-bobDia*2, bobYPos, bobRadius);
	bob3 = new bob(roofX-bobDia, bobYPos, bobRadius);
	bob4 = new bob(roofX, bobYPos, bobRadius);
    bob5 = new bob(roofX+bobDia, bobYPos, bobRadius);
    bob6 = new bob(roofX+bobDia*2, bobYPos, bobRadius);
    bob7 = new bob(roofX+bobDia*3, bobYPos, bobRadius);
//	var bobDiameter = bob1.radius*2;

	 rope1 = new Rope(bob1.body, roof.body, -bobDia*3, 0);
	 rope2 = new Rope(bob2.body, roof.body, -bobDia*2, 0);
	 rope3 = new Rope(bob3.body, roof.body, -bobDia, 0);
	 rope4 = new Rope(bob4.body, roof.body, 0, 0);
	 rope5 = new Rope(bob5.body, roof.body, bobDia, 0);
	 rope6 = new Rope(bob6.body, roof.body, bobDia*2, 0);
	 rope7 = new Rope(bob7.body, roof.body, bobDia*3, 0);

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  
  drawSprites();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		// var bob1CurrY = bob1.body.position.y;
//		var x = Matter.Body.Constraint. rope1.length;
//		var ropeLength = rope1.length;
		var ropeLength = 350; // hard coding is bad !!!
		var newX = bob1.body.position.x - ropeLength*0.5; // length*sine(30degree)
		var newY = bob1.body.position.y - ropeLength*0.14; // length*cosine(30degree)
		Matter.Body.setPosition(bob1.body, {x: newX, y: newY});
		Matter.Body.setStatic(bob1.body, false);
		Matter.Body.setStatic(bob2.body, false);
		Matter.Body.setStatic(bob3.body, false);
		Matter.Body.setStatic(bob4.body, false);
		Matter.Body.setStatic(bob5.body, false);
		Matter.Body.setStatic(bob6.body, false);
		Matter.Body.setStatic(bob7.body, false);
	}
}
