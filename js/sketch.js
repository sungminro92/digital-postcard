const sketch = function(p) {

  let pointA; // curve line top
  let pointB; // curve line bottom
  var d = 8;
  var n = 5;
  // var k = n/d;
  let sliderD;
  var sliderN;

  p.setup = function() {
    p.createCanvas(350,550);
    sliderD = p.createSlider(1, 20, 6, 1);
    // sliderD.position(p.width-20, p.height + 50 );
    sliderN = p.createSlider(1, 20, 10, 1)
    // sliderN.position(p.width+150, p.height + 50 );

  }

  p.draw = function() {
    d = sliderD.value();
    // d = dVal.value();
    n = sliderN.value();
    let k = n / d;
    if(color == false) {
      p.background(50);
    } else if(color == true) {
      p.background(backgroundColor);
    }

    // p.push();
    p.translate(p.width/2, p.height/2-100);

    p.beginShape();
    if(color == false) {
      p.stroke(255);
    } else if(color == true) {
      p.stroke(flowerColor);
    };
    // p.stroke(flowerColor);
    p.strokeWeight(4);
    p.noFill();
    for(let a = 0; a < p.TWO_PI * reduceDenominator(n, d); a+= 0.01) {
      let r = flowerSize * p.cos(k * a);
      let x = r * p.cos(a);
      let y = r * p.sin(a);
      p.vertex(x, y);
    };
    p.endShape(p.CLOSE);


    p.translate(-p.width/2, -p.height/2+100);


    //CURVE LINE FOR STEM

    // p.curve(100, 50, p.width/2 + 45, p.height/2, p.width/2+85, p.height-115, p.width/2 ,p.height);

    // p.rect(100,100,50);
    // p.textFont(font);

    p.beginShape();
    p.curveVertex(0, 0);
    p.curveVertex(175, 178);
    p.curveVertex(200, 500);
    p.curveVertex(85, 800);
    p.curveVertex (100, 1200);
    p.endShape();

    p.text("(" + p.mouseX + ", " + p.mouseY + ")", p.mouseX, p.mouseY);
    p.noStroke();
    if(fontSize == undefined) {
      p.textSize(15);
    } else {
      p.textSize(fontSize);
    }
    p.textSize(fontSize);
    p.textFont(font);
    p.textWrap(p.WORD);
    p.textAlign(p.CENTER);

    if(color == false) {
      // p.fill(255);
      p.fill(255);
    } else if(color == true) {
      p.fill(textColor);
    };
    p.text(message,25, 350, 300, 300);
  }

  p.keyPressed = function() {
    message = $('#message').val();
  }

  p.mouseClicked = function() {

  }
}
// end of




function reduceDenominator(numerator, denominator) {
    function rec(a, b) {
        return b ? rec(b, a % b) : a;
    }
    return denominator / rec(numerator, denominator);
}


const myP5 = new p5(sketch, 'p5canvas');
let message = '';
let kVal = 10;
let dVal = 10;
let nVal;

let flowerSize = 150;

let color = false;
let backgroundColor = '';
let flowerColor = '';
let textColor = '';

let font = 'Helvetica';
let fontSize;



let addclass = 'selectedType';
let typefaces = $('.typeface');
typefaces.click(function() {

    typefaces.removeClass(addclass);
    $(this).addClass(addclass);
    let selectedFont = $(this).attr("id");
    if(selectedFont == 'sansSerif') {
      font = 'Poppins';
    } else if(selectedFont == 'serif') {
      font = 'Playfair Display';
    } else if(selectedFont == 'display') {
      font = 'Concert One';
    } else if(selectedFont == 'cursive') {
      font = 'Italianno';
    }  else if(selectedFont == 'handwritten') {
      font = 'Indie Flower';
    }
    console.log("font changed to: " + font);
});

$('input').on('input', function() {
  var size = $(this).val();
  fontSize = parseInt(size);
  console.log(fontSize);

});

function colorChange() {
  color = true;
  flowerColor = $('#flowerColor').val();
  backgroundColor = $('#backgroundColor').val();
  textColor = $('#textColor').val();
  console.log(backgroundColor);
}

function updateInput(value) {
  dVal = value;
}




// document.getElementByClassName("typeface").addEventListener("click", random);

//
// function random(e) {
//   console.log('haha');
//   typefaces.removeClass(addclass);
//   e.addclass(addclass);
// }

console.log('this');
console.log(backgroundColor);
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

let sayWorking = () => console.log('working');
sayWorking();
