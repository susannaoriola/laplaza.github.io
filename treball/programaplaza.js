function setup () {
  // el tamaño es de 192x157 y se ajusta automaticamente
  createCanvas(192, 157);
  background(0,255,0);

}

function draw() {
background(0);

stroke(255,0,0);
fill(0,0,0);

rectMode(CENTER);
translate(width / 2, height / 2);
translate(p5.Vector.fromAngle(millis() / 10, 40));
rect(0, 0, 50, 50);

stroke(0,255,0);
fill(0,0,0);

rectMode(LEFT);
translate(width / 2, height / 2);
translate(p5.Vector.fromAngle(millis() / 50, 50));
rect(0, 0, 50, 50);

stroke(82,255,0);
fill(0,0,0);

rectMode(RIGHT);
translate(width / 1, height / 1);
translate(p5.Vector.fromAngle(millis() / 10, 40));
rect(30, 30, 30, 30);

}


