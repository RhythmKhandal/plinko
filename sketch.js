const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint=Matter.Constraint;

var ground;
//var division1,division2,division3,division4,division5,division6;
//var plinko1;
//var particle1,particle2;

var particles=[];
var divisions=[];
var plinkos=[];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
 
  engine = Engine.create();
	world = engine.world;

  ground=new Ground(240,795,480,10);

  // division1=new Division(5,650,7,280)
  // division2=new Division(100,650,7,280)
  //  division3=new Division(195,650,7,280)
  //  division4=new Division(290,650,7,280)
  //  division5=new Division(385,650,7,280)
  //  division6=new Division(477,650,7,280)
  
   //plinko1=new Plinko(100,100,10,10)
   //particle1=new Particle(100,100,10,10)
   //particle2=new Particle(200,100,10,10)

   




  Engine.run(engine);
}

function draw() {
  background("black");  
  
  for(var k=0; k <= this.divisions.width; k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))}

 ground.display();
//  division1.display();
//  division2.display();
//  division3.display();
//  division4.display();
//  division5.display();
//  division6.display();
//  //plinko1.display();
 //particle1.display()
 //particle2.display()
}