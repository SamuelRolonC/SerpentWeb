// @Debug JS INIT

console.log("events.js enlazado")


// @Section Class statements

class Animal {
  constructor(x ,y, url = "") {
    this.x = x
    this.y = y
    this.url = url
    this.ready = false
  }
}

var keys = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};


// @Section Function statements

/*function myRandom(min, max) {
  return Math.round(Math.random()*(max-min+1)+10)
}*/

function drawLine(canvas, x1, y1, x2, y2, color = "black", width = 3) {
  canvas.beginPath()
  canvas.strokeStyle = color
  canvas.lineWidth = width
  canvas.moveTo(x1,y1)
  canvas.lineTo(x2,y2)
  canvas.stroke()
  canvas.closePath()
}

function keyboardDraw(e) {
  let lineColor = "red"
  let movement = 5

  switch (e.keyCode) {
    case keys.UP:
      drawLine(paper, x, y, x, y - movement, lineColor)
      y -= movement
      break;
    case keys.DOWN:
      drawLine(paper, x, y, x, y + movement, lineColor)
      y += movement
      break;
    case keys.LEFT:
      drawLine(paper, x, y, x - movement, y, lineColor)
      x -= movement
      break;
    case keys.RIGHT:
      drawLine(paper, x, y, x + movement, y, lineColor)
      x += movement
      break;
  }
}


// @Section Body

document.addEventListener("keydown", keyboardDraw)

var square = document.getElementById("drawArea")
var paper = square.getContext("2d")

var x = 150
var y = 150

drawLine(paper, 149, 149, 151, 151, 200)
