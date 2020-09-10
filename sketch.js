const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree;
var boy,boyImg;
var stone;


function preload()
{
   boyImg = loadImage("boy.png")
}

function setup() {
	createCanvas(1100,700);

  engine = Engine.create();
	world = engine.world;

    ground = new Ground(550,680,1100,20);

    tree = new Tree();

    stone = new Stone(125,525);

  Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(80,80,80);

  ground.display();
  
  tree.display();

  image(boyImg,100,440,200,300);

  stone.display();

  drawSprites();
}