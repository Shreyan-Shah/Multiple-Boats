const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon, cannonball, boat;

var balls = [];
var boats = [];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  //by default the unit of angle for computer is radians but we understand degrees
  angleMode(DEGREES);

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Cannon(170, 120, 20, 70, 15);
}

function draw() {
  image(backgroundImg, 0, 0, 1200, 600)
  Engine.update(engine);


  rect(ground.position.x, ground.position.y, width * 2, 1);


  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();
  cannon.display();
  showBoats();

  for (var i = 0; i < balls.length; i++) {
    showCannonballs(balls[i], i)
  }
}

function showCannonballs(ball, i) {
  if (ball) {
    ball.display();
  }
}

function showBoats() {
  var positions = [-40, -60, -70, -20];
  var position = random(positions);
  boat = new Boat(width, 550, 170, 170, position);
  boats.push(boat);

  for (let index = 0; index < boats.length; index++) {
    Matter.Body.setVelocity(boats[index].body, { x: -0.9, y: 0 })
    boats[index].display();

  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    cannonball = new Cannonball(cannon.x, cannon.y, 30);
    balls.push(cannonball);
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length - 1].shoot();
  }
}