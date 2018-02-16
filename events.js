// @Debug JS INIT

console.log("events.js enlazado")


// @Section Class and variables declarations

var square = document.getElementById("drawArea")
var paper = square.getContext("2d")
var clickState = false

var brushx,brushy
var lineColor = "red"


// @Section Function statements

function drawLine(canvas, x1, y1, x2, y2, color = "black", width = 3) {
  canvas.beginPath()
  canvas.strokeStyle = color
  canvas.lineWidth = width
  canvas.moveTo(x1,y1)
  canvas.lineTo(x2,y2)
  canvas.stroke()
  canvas.closePath()
}

function mouseDraw(e) {
  if (clickState) {
    console.log(e.x + "," + e.y)
    drawLine(paper, brushx, brushy, e.x, e.y)
    brushx = e.x
    brushy = e.y
  }
}

function mouseActivate(e) {
  console.log("Mouse bottom active")
  clickState = true
  brushx = e.x
  brushy = e.y
}

function mouseDectivate(e) {
  console.log("Mouse bottom deactive")
  clickState = false
}


// @Section Body

drawArea.addEventListener("mousedown", mouseActivate)
drawArea.addEventListener("mouseup", mouseDectivate)
drawArea.addEventListener("mousemove", mouseDraw)
