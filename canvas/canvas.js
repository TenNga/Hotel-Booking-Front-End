const canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')

canvas.width = window.innerWidth
innerWidth = canvas.width 
innerHeight = canvas.height
console.log(innerWidth)
console.log(innerHeight)

imageX = 50
imageY = 0


let myImg = new Image();
myImg.onload = function() {
   c.drawImage(myImg, imageX, imageY);
};
myImg.src = "img/Labyrinth_logo.png"



// function getRndColor() {
//     let r = 255*Math.random()|0,
//         g = 255*Math.random()|0,
//         b = 255
//     return 'rgb(' + r + ',' + g + ',' + b + ')';
// }

const object = (x, y) => {
    c.beginPath();
    c.arc(x, y, 3, 0, Math.PI * 2, false);
    c.closePath()
    c.fillStyle = 'gba(2, 94, 255, 0.1)';
    c.fill();
    c.strokeStyle = "rgba(181, 238, 238, .85)";
    c.lineWidth = 5
    c.stroke();
  }
  
  x = -10
  y = 180

  const turns = [
      false,
      false,
      false,
      false
  ]

  const movements = () => {
      if (x < 175 && y == 180 && !turns[0]){
        x += 6
        y += 0
        turns[0] = true
    } 
     if (x > 175 && y >= 70 && !turns[1]) {
        x += 0
        y -= 5 
        turns[1] = true
    } 
}
    

const secondTurn = () => {
   if (x >= 100 && y >= 70){
        x -= 5 
        y += 0
    } 
 }

  function moveCanvas(){
      
    firstTurn()
    setTimeout(secondTurn(), 200)
      
      requestAnimationFrame(moveCanvas)
      
    //   c.clearRect(0, 0, innerWidth, innerHeight)

      c.drawImage(myImg, imageX, imageY);
      object(x, y)

}


moveCanvas()