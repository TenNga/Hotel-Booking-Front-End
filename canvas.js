const canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')

canvas.width = window.innerWidth
innerWidth = canvas.width 
innerHeight = canvas.height



let myImg = new Image();
myImg.onload = function() {
   c.drawImage(myImg, 250, 20);
};
myImg.src = "https://www.fontspace.com/api/renderfont4/5OjG/eyJyIjoiZ2RpIiwiaCI6MTI0LCJ3IjoxMDAwLCJmcyI6MTI0LCJmZ2MiOiIjMzczMmUyIiwiYmdjIjoiIzAwMDAwMCJ9/TEFCWVJJTlRI/ideomaliner.png"



function getRndColor() {
    let r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

const object = () => {
    c.beginPath();
    c.arc(x, y, 5, 0, Math.PI * 2, false);
    c.closePath()
    c.fillStyle = getRndColor();
    c.fill();
    c.strokeStyle = getRndColor();
    c.lineWidth = Math.floor(Math.random() * 10) + .1;
    c.stroke();
  }
  
  x = 100
  y = 10

  const movements = () => {
      if (x < 200 ){
        x += 3
        y += 0

    } else if (x > 200 && y >= 10) {
        x = x * 1
        y += 10
    } else if(x >= 200 && y >= 40){
        x += 5
        y += 10
    } else {
        x += 0
        y += 0
    }
  }

  function move(){
      
    movements()
      
      requestAnimationFrame(move)
      
      c.clearRect(0, 0, innerWidth, innerHeight)

      c.drawImage(myImg, 250, 20);
      object()

}


move()