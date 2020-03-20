var numSquares = 6;

var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".squares");

var colorDisplay = document.querySelector("#colordisplay");

var modeBtn = document.querySelectorAll(".mode");

var message = document.querySelector("#message");

var resetBtn = document.querySelector("#reset");

var pickedColor = pickColor();

var h1 = document.querySelector("h1");

for (var i = 0; i < modeBtn.length; i++) {
  modeBtn[i].addEventListener("click", function() {
    modeBtn[0].classList.remove("selected");
    modeBtn[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
    reset();
  });
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetBtn.textContent = "New Colors";
  message.textContent = "";

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}
resetBtn.addEventListener("click", function() {
  reset();
});
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      message.textContent = "Correct!";
      resetBtn.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#111111";
      message.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
