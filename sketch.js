//Sebastián Baudrand
//ejercicio
//taller

//var x=0;
var rojo
var verde
var azul


function setup() {
  frameRate(20)

  createCanvas(800,500) ;
  background(255,0,0);
  //background(255,0,0);
}

function draw() {
  rojo=random(0,255)
  verde=random(0,255)
  azul=random(0,255)

  background(255,0,0);
  //fill(100,200,100)
  fill(rojo, verde, azul, 0);
  rect(400,250,200,200);
  ellipse(mouseX,mouseY,250,250);
  //x=x+2;

}
