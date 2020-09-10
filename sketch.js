let albertX = 200;
let albertSpeed = 3;
let albertY = 720;

let tonyX = 500;
let tonySpeed = 6;
let tonyY = 20;

let annayPos = 180;
let annaX = 150;
let annaSpeed = 10;

let camiloX = 600;
let camiloSpeed = 6;

let zoeX = 400;
let zoeSpeed = 2;

let yalianaX = 650;
let yalianaSpeed = 4;

let jbX = 400;
let jbS = 2;
let jbY = 333;

let xuwenX = 300;
let xuwenSpeed = 4;

let tomX = 500
let tomSpeed = 10;

let jamieX = 450;
let jamieY = 600;
let jamieSpeed = 25;

let miguelX = 300;
let miguelY = 100;
let miguelSpeed = 5;

let karimX = 600;
let karimSpeed = 6;
let karimY = 400;

let yogiX = 400;
let yogiSpeed = 20;


let yuktaX = 350;
let yuktaSpeed = 6;

let sakeenaX = 400;
let sakeenaSpeed = 2;

let tylerX = 200;
let tylerSpeed = 50;

let antoineX = 600
let antoineSpeed = 5
let antoineY = 500

let mattX = 450;
let mattSpeed = 15;

let anubhaX = 550;
let anubhaSpeed = 4;
let sonaliX = 600;
let sonaliSpeed = 6;

function setup() {
  createCanvas(1400, 1000);
}

function draw() {
  background(220);

  // 00
  // Albert's snake
  if (albertX > width || albertX < 0) {
    albertSpeed = albertSpeed*-1;
  }
  albertX = albertX + albertSpeed;



  strokeWeight(4);
  fill(0, 204, 0);
  rect(albertX + 20, albertY, 20, 20);
  rect(albertX, albertY-100, 55, 105);

  let albertYPos = 140

  rect(albertX, albertY+20, 80, 20);
  rect(albertX-20, albertY+40, 100, 20);
  rect(albertX-30, albertY+20, 120, 20);

  // 20
  // yogi's snake
  if (yogiX > width || yogiX < 0) {
    yogiSpeed = yogiSpeed*-1;
  }
  yogiX = yogiX + yogiSpeed;

  strokeWeight(4);
  fill(0, 204, 0);
  rect(yogiX + 20, 120, 20, 20);
  rect(yogiX, 20, 55, 105);

  let yogiYPos = 140

  rect(yogiX, yogiYPos, 80, 20);
  rect(yogiX-20, yogiYPos+20, 100, 20);
  rect(yogiX-30, 180, 120, 20);


  // 01
  //Duong Die's Snake

  let tonyX = 10000;
  let tonySpeed = 6;
  //snake

  //body
  //let tonyY = 20;

  fill('rgba(0,255,0, 0.25)')
  rect(tonyX, tonyY, 55, 75)
  rect(tonyX, tonyY + 75, 20, 20)
  rect(tonyX, tonyY + 93, 75, 25)
  rect(tonyX, 140, 120, 25)
  rect(tonyX, 160, 170, 25)

  //snake spot
  fill(255, 204, 0);
  rect(tonyX, 165, 15, 10)
  fill(255, 204, 0);
  rect(tonyX, 175, 15, 10)
  fill(255, 204, 0);
  rect(tonyX, 165, 15, 10)
  fill(255, 204, 0);
  rect(tonyX, 175, 15, 10)

  // 02
  //  Antoine's snake
  if (antoineX > width || antoineX < 0) {
    antoineSpeed = antoineSpeed*-1
  }
  antoineX = antoineX + antoineSpeed
  //Snake Body
  fill(0,204,0);
  rect(antoineX, antoineY-100, 66, 100);
  rect(antoineX+25, antoineY, 35, 35);
  rect(antoineX, antoineY+35, 100, 35);
  rect(antoineX-10, antoineY+70, 125, 35);
  rect(antoineX-20, antoineY+105, 165, 35);
  triangle(antoineX+130, antoineY+105, antoineX+145, antoineY+105, antoineX+145, antoineY+85);

  //Snake Eyes
  fill(54);
  circle(antoineX+15, antoineY-85, 10);
  circle(antoineX+30, antoineY-85, 10);

  //Snake Spots
  fill(255, 204, 0);
  rect(antoineX+10, antoineY+35, 20, 10);
  rect(antoineX+50, antoineY+50, 20, 10);


  // 03
  // Yukta's snake
  //snakebody
  if (yuktaX > width || yuktaX < 0) {
    yuktaSpeed = yuktaSpeed*-1;
  }
  yuktaX = yuktaX + yuktaSpeed;
  fill (0, 204, 0)
  stroke(50);
  rect(yuktaX, 120, 20, 20);
  rect(yuktaX, 20, 55, 105);

  let ypos =  140

  rect(yuktaX, ypos, 80, 20);
  rect(yuktaX, ypos+20, 100, 20);
  rect(yuktaX, ypos+40, 120, 20);


  // 04
  // Xuwen Zhang's snake
  //  background(220);
  fill(100,180,100)
  rect(180,120,50,70);
  rect(200,190,20,20);
  rect(180,210,65,20);
  rect(175,230,75,20);
  rect(170,250,100,20);
  strokeWeight(3)


  // 05
  //  Camilo's snake
  //Snake Body
  if (camiloX > width || camiloX < 0) {
    camiloSpeed = camiloSpeed*-1
  }
  camiloX = camiloX + camiloSpeed;

  strokeWeight(4);
  fill('rgb(0,255,0)');
  rect(camiloX, 20, 55, 90);
  rect(camiloX, 110, 30, 30);
  rect(camiloX, 140, 80, 30);
  rect(camiloX, 170, 100, 30);
  rect(camiloX, 200, 140, 30);
  triangle(camiloX, 200, camiloX, 170, camiloX-15, 200);

  //Snake Eyes
  fill(51);
  circle(115, 40, 8)
  circle(130, 40, 8)


  // 06
  //  Sakeena's Snake

  if (sakeenaX > width || sakeenaX < 0) {
    sakeenaSpeed = sakeenaSpeed*-1;
  }
  sakeenaX = sakeenaX + sakeenaSpeed;

  fill(0, 204, 0);
  rect(sakeenaX, 20, 75, 110);
  rect(sakeenaX, 130, 30, 30);
  rect(sakeenaX, 160, 100, 30);
  rect(sakeenaX, 190, 125, 30);
  rect(sakeenaX, 220, 170, 40);
  triangle(sakeenaX, 220, sakeenaX, 220, 210, 190);
  fill(225, 204, 0);
  rect(sakeenaX, 205, 20, 10);
  rect(sakeenaX, 195, 20, 10);
  rect(sakeenaX, 205, 20, 10);
  rect(sakeenaX, 225, 20, 15);
  rect(sakeenaX, 235, 20, 15);
  rect(sakeenaX, 225, 20, 15);
  rect(sakeenaX, 235, 20, 15);
  fill(51);
  circle(sakeenaX, 40, 15);
  circle(sakeenaX, 40, 15);


  // 07
  //  Tom's Snake
  rect(220,40,50,100)
  rect(240,140,20,15)
  rect(200,155,80,20)
  rect(180,175,120,20)
  rect(160,195,160,20)
  fill(0,255,0)


  // 08
  //  Jamie

  if (jamieX > width || jamieX < 0) {
    jamieSpeed = jamieSpeed*-1;
  }
  jamieX = jamieX + jamieSpeed;
  //Body
  fill(0,204,0)
  strokeWeight(3)
  rect(jamieX,jamieY+150,20,20);
  rect(jamieX,jamieY+50,70,100);
  rect(jamieX,jamieY+170,80,20);
  rect(jamieX,jamieY+190,100,20);
  rect(jamieX,jamieY+210,140,20);
  //Eyes
  fill(0,0,0)
  circle(jamieX,jamieY+70,8);
  circle(jamieX,jamieY+70,8);
  //Tongue
  line(jamieX,jamieY+150,90,160)
  line(jamieX,jamieY+160,85,160)
  line(jamieX,jamieY+160,90,165)
  //Tail & Spots
  fill(255,204,0)
  triangle(jamieX,jamieY+210,jamieX,jamieY+195,jamieX,jamieY+210)
  square(jamieX,jamieY+215,10)
  square(jamieX,jamieY+220,10)
  square(jamieX,jamieY+210,10)
  square(jamieX,jamieY+212,10)


  // 09
  // jgpersic
  fill(color(100, 204, 0))
  rect(50, 20, 55, 55)
  rect(75, 75, 20, 25)
  rect(30, 100, 100, 20)
  rect(20, 120, 120, 20)
  rect(10, 140, 155, 20)

  ellipse(60, 46, 10, 20)
  ellipse(80, 46, 10, 20)


  // 10
  //  Sonali's snake
  //snake body



  strokeWeight(3);
  fill (0,184,0)
  rect (sonaliX,20,55,105);
  rect (sonaliX,125,20,20);
  rect (sonaliX,145,80,20);
  rect (sonaliX,165,110,20);
  rect (sonaliX,185,130,20);
  //snake spots
  strokeWeight(1);
  fill (255,204,0)
  rect (185,189,10,6)
  fill (51);
  circle (210,35,6,6)
  circle (220,35,6,6)


  // 11
  //  Miguelor's snake
  //Snake Body

  if (miguelX > width || miguelX < 0) {
    miguelSpeed = miguelSpeed*-1;
  }
  miguelX = miguelX + miguelSpeed;

  fill(0, 168, 0);
  strokeWeight(4);
  rect(miguelX, miguelY - 70, 55, 75);
  rect(miguelX, miguelY + 5, 25, 25);
  rect(miguelX, miguelY + 30, 75, 25);
  rect(miguelX, miguelY + 55, 100, 27);
  rect(miguelX, miguelY + 82, 145, 32);
  triangle(30, 75, 58, 20, 86, 75);

  //Snake spots
  strokeWeight(1);
  rect(miguelX, miguelY + 95, 15, 10);


  // 12
  // Anna's snake
  if (annaX > width || annaX < 0) {
    annaSpeed = annaSpeed*-1;
  }
  annaX = annaX + annaSpeed;

  fill(0,146,0);
  strokeWeight(2); //body
  rect(annaX, annayPos - 100 , 70, 100);
  rect(annaX + 30, annayPos, 30, 30);
  rect(annaX, annayPos + 30, 100, 30);
  rect(annaX - 20, annayPos + 60, 150, 30);
  rect(annaX - 30, annayPos + 90, 190, 40);
  fill(255, 255, 0);
  strokeWeight(0); //spots
  rect(annaX + 10 ,annayPos +100,30,20);


  // 13
  //  Tyler Beerse's snake

  if (tylerX > width || tylerX < 0) {
    tylerSpeed = tylerSpeed*-1;
  }
  tylerX = tylerX + tylerSpeed;


  fill(0, 204, 0);
  rect(tylerX, 20, 60, 75);
  rect(tylerX, 95, 25, 25);
  rect(tylerX, 120, 75, 25);
  rect(tylerX, 145, 95, 25);


  // 14
  //  Jbarzideh's snake
  if (jbX > width || jbX < 0) {
  jbS = jbS *-1;
  }
  jbX = jbX + jbS;

  rect(jbX,jbY+20,70,90);
  rect(jbX,jbY+110,30,30);
  rect(jbX,jbY+140,100,30);
  rect(jbX,jbY+170,140,30);
  rect(jbX,jbY+200,200,30);


  // 15
  //  Zoe Nye's snake
  if (zoeX > width || zoeX < 0) {
    zoeSpeed = zoeSpeed*-1;
  }
  zoeX = zoeX + zoeSpeed;


  fill(0,200,0);
  rect(zoeX, 30, 55, 95);
  rect(zoeX, 125, 20, 20);
  rect(zoeX, 140, 75, 20);
  rect(zoeX, 160, 90, 20);
  rect(zoeX, 180, 110, 25);




  // 16
  //  Karim Rukaiya
  //Snake head
  if (karimX > width || karimX < 0) {
    karimSpeed = karimSpeed*-1;
  }
  karimX = karimX + karimSpeed;

  fill (0, 204, 0);
  rect (karimX, 15, 55, 105);
  line(200, 120, 170, 140);
  rect (karimX, 120, 20, 20);
  rect (karimX, 140, 80, 20);
  rect (karimX, 160, 120, 20);
  rect (karimX, 180, 160, 20);
  fill (0, 0, 0);
  ellipse(210, 50, 8, 8);
  ellipse(225, 50, 8, 8);
  // 17
  //Snake body
  fill (255,255,0);
  rect (karimX, 185, 15, 10);


  // 18
  //  Matt Sacha

  if (mattX > width || mattX < 0) {
    mattSpeed = mattSpeed*-1;
  }
  mattX = mattX + mattSpeed;

  rect(mattX, 50, 55, 100);
  rect(mattX, 150, 20, 20);
  rect(mattX, 170, 75, 25);
  rect(mattX, 195, 100, 25);
  rect(mattX, 220, 150, 25);
  triangle(mattX, 75, 58, 20, 86, 75);


  // 19
  // yaliana

  if (yalianaX > width || yalianaX < 0) {
    yalianaSpeed = yalianaSpeed*-1;
  }
  yalianaX = yalianaX + yalianaSpeed;

  fill(34, 139, 34)
  rect(170, 20, 55, 85)
  rect(200, 105, 20, 20)
  rect(170, 125, 65, 20)
  rect(155, 145, 95, 20)
  rect(145, 165, 130, 20);
  fill(270, 270, 0)
  rect(168, 168, 13, 8)
  rect(200, 173, 13, 8)


  // 20
  //  Yogesh
  fill(0,128,0)
  rect(yogiX, 200, 75, 10)
  rect(yogiX, 190, 45, 10)
  rect(yogiX, 180, 30, 10)
  rect(yogiX, 170, 10, 10)
  rect(yogiX, 120, 35, 50)
  ellipse(350 ,200 ,10 , 10 )

  if (anubhaX > width || anubhaX < 0) {
    anubhaSpeed = anubhaSpeed*-1
  }
  anubhaX = anubhaX + anubhaSpeed;
}
