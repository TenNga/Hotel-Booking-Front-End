const canvas = document.querySelector('canvas')
var c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight




let up = false,
    right = false,
    down = false,
    left = false;

  
    document.addEventListener('keydown',press)

function press(e){
  if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
    up = true
  }
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
    right = true
  }
  if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
    down = true
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
    left = true
  }
}
    document.addEventListener('keyup',release)

function release(e){
  if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
    up = false
  }
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
    right = false
  }
  if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
    down = false
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
    left = false
  }
}




function getRndColor() {
    let r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}


let xPos = 500
let yPos = 500

let radius = 20

    let minotaur = []

    let xPos2 = 400
    let yPos2 = 400




function move(){

  if (up){
    yPos -= 5;
    yPos2 -= 7;
}
  else if (right){
    xPos += 5; 
    xPos2 += 7; 
}
  else if (down){
    yPos += 5;   
    yPos2 += 7;   
}
  else if (left){
    xPos -= 5;
    xPos2 -= 7;
}

  requestAnimationFrame(move)

    c.clearRect(0, 0, innerWidth, innerHeight)

    c.beginPath();
    c.arc(xPos, yPos, radius, 0, Math.PI * 2, false);
    c.strokeStyle = getRndColor();
    c.lineWidth = Math.floor(Math.random() * 20) + 2
    c.stroke();


  
    c.beginPath();
    c.arc(xPos2, yPos2, radius, 0, Math.PI * 2, false);
    c.strokeStyle = getRndColor();
    c.lineWidth = Math.floor(Math.random() * 20) + 2
    c.stroke();

}


move()




// function move2(arr){
//     console.log(arr)

// arr.forEach (function(element){
//         if (element === "up"){
//             yPos2 -= 5;
//             console.log(yPos2)
//         }
//         else if (element === "right"){
//           xPos2 += 5;
//           console.log(xPos2)
//        }
//         else if (element === "down"){
//           yPos2 += 5;
//           console.log(yPos2)
//        }
//         else if (element === "left"){
//           xPos2 -= 5;
//           console.log(xPos2)
//           }
// })

  
    
//     requestAnimationFrame(move2)
  
//       c.clearRect(0, 0, innerWidth, innerHeight)
  
//       c.beginPath();
//       c.arc(xPos2, yPos2, radius, 0, Math.PI * 2, false);
//       c.strokeStyle = getRndColor();
//       c.lineWidth = Math.floor(Math.random() * 20) + 2
//       c.stroke();
//     }

    
 