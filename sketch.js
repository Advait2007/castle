function setup() {
  createCanvas(700,650);
  wall1 = createSprite(50, 325, 20, 400);
  wall2 = createSprite(650,325,20,400);
  wall3 = createSprite(100,325,50,400);
  wall4 = createSprite(600,325,50,400);
  house = createSprite(350,325,400,400);
  door = createSprite(350,420,100,200);
}

function draw() {
  background(80,80,80);
  wall1.shapeColor = "brown"
  wall2.shapeColor = "brown"
  wall3.shapeColor = "brown"
  wall4.shapeColor = "brown"
  house.shapeColor = "brown"
  door.shapeColor = "red"

  triangle(350, 30, 145, 125, 550, 125); 
  triangle(75,125,125,125,100,100); 
  triangle(575,125,625,125,600,100); 
  drawSprites();
}