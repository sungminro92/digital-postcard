const sketch = function(p) {

  p.setup = function () {
    p.createCanvas(350,550);

  }

  p.draw = function () {
    p.background(0);
    p.fill(255,0,0);
    p.rect(100,100,50);
    // p.textarea()
  }

};

const myP5 = new p5(sketch, 'p5canvas');

//
// function setup() {
// createCanvas(200,200);
//
// }
//
// function draw() {
  // background(0);
  // fill(255,0,0);
  // rect(100,100,50);
  // textarea()
// }
//
// window.onload = () => {
//   sayWorking();
// }

let sayWorking = () => console.log("working");
