const canvas = document.querySelector('canvas')
const secondsCount = document.querySelector(".seconds")
const context = canvas.getContext('2d')
const marioDimensions = {width: 250, height:383}

const startTime = Date.now()

canvas.width = window.innerWidth
canvas.height = window.innerHeight
context.translate(window.innerWidth/2, window.innerHeight/2)

const image = new Image()
image.src = './assets/pacman.png'

const loopingMarios = 40
const offsetDistance = 100
let currentOffset = 0

image.onload = () => {
  startLooping()
}

function draw(offset) {
  context.drawImage(image, -marioDimensions.width/2 - offset/2, -marioDimensions.height/2 - offset/2, marioDimensions.width + offset, marioDimensions.height + offset)
}

function loopDraw() {
  for(let i = loopingMarios; i >= 1; i--) {
    draw(i * offsetDistance + currentOffset)
  }

  draw(offsetDistance)

  currentOffset++
  if(currentOffset >= offsetDistance) {
    currentOffset = 0
  }

  const newTime = Math.floor((Date.now() - startTime) / 1000)

  secondsCount.innerText = newTime

  requestAnimationFrame(loopDraw)
}

function startLooping() {
  requestAnimationFrame(loopDraw)
}
