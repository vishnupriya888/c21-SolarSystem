var sun,mercury,venus,mars,earth,jupiter,saturn,uranus,neptune,pluto;
var sunImg, mercuryImg, venusImg, earthImg, marsImg, jupeterImg, saturnImg, uranusImg, neptuneImg,plutoImg;

function setup() {
  createCanvas(1200,800);

  sun = createSprite(10,10, 200, 200);
  mercury = createSprite(250,100,40,40);
  venus = createSprite(350,150,30,30);
  earth = createSprite(450,200,40,40);
  mars = createSprite(550,250,40,40);
  earth = createSprite(650,300,30,30);
  jupiter = createSprite(750,350,30,30);
  saturn = createSprite(850,450,40,40);
  uranus = createSprite(950,550,30,30);
  neptune = createSprite(1050,650,40,40);
  pluto = createSprite(1150,700,30,30);
}

function draw() {
  background(0,0,0);  
  drawSprites();
}