function setup() {
    createCanvas(400, 400);
  }
  let x = 0;
  function draw() {
    background(220);
    ellipse(x, 200, 100, 100);
    x = x + 1;
    if (x > 400){
      x = 0;
    }
  }