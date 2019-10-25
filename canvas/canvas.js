const canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')


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

// fade-----------------------------------------------------------------------------------------------------------------------------------
// redFade = 4;
// greenFade = 9;
// blueFade = 32;


// lastImage = c.getImageData(0,0,innerWidth,innerHeight);
// pixelData = lastImage.data;
// len = pixelData.length;
// for (i=0; i<len; i += 4) {
//     if ((r = pixelData[i]) != 0) {
//         r -= redFade;
//         g = pixelData[i+1]-greenFade;
//         b = pixelData[i+2]-blueFade;
//         pixelData[i] = (r < 0) ? 0 : r;
//         pixelData[i+1] = (g < 0) ? 0 : g;
//         pixelData[i+2] = (b < 0) ? 0 : b;
//     }
// }
// c.putImageData(lastImage,0,0);

// fade-------------------------------------------------------------------------------------------------------------------------------------



const object = (x, y) => {
    c.beginPath();
    c.arc(x, y, 6, 0, Math.PI * 2, false);
    c.closePath()
    c.fillStyle = 'rgba(237, 255, 255, 0.9)';
    c.fill();
    
    c.lineWidth = 3
    c.strokeStyle = "rgba(181, 238, 238, .7)";
    c.stroke();
    
  }
  
  x = -10
  y = 180

//   const turns = [
//       false,
//       false,
//       false,
//       false
//   ]

// if(x > x){
//     let right
// } else if( x < x){
//     let left
// } else if(y > y){
//     let down
// } else if(y < y - 1){
//     let up
// }

  const movements = () => {
    //   console.log(turns)
    //   debugger
      if (x < 179 ){
        x += 5
        // turns[0] = true
        // console.log( x,y, "first")
    } 
     if (x == 180 ) {
        //  console.log( x,y, "second")
        x += 0
        y -= 5 
        // turns[1] = true
    } 
    if (y == -10 ){
        //  console.log(x,y, "h")
         x += 5
        //  console.log(x,y)
         y += 0
     } 
    if (x == 350 ){
        //  console.log(x,y, "4")
        //  x += 5
        //  console.log(x,y)
         y += 5
     } 
    if (x >= 350 && x != 550 && x < 551 && y == 60){
        //  console.log(x,y, "5")
         x += 5
        //  console.log(x,y)
        //  y += 5
     } 
    if (x >= 550 && x != 571 && x < 572 ){
        //  console.log(x,y, "6")
         x += 3
        //  console.log(x,y)
         y += 6
     } 
    if (x >= 571 && x != 641 && x < 642){
        //  console.log(x,y, "7")
         x += 5
        //  console.log(x,y)
         y += 0
     } 
    if (x == 641 && y >= 102 && y!= 182 && y < 183){
        //  console.log(x,y, "8")
         x += 0
        //  console.log(x,y)
         y += 5
     } 
    if (x >= 641 && x != 892 && x < 893 && y == 182){
        x += 5
        // console.log(x,y)
        y += 0
        // console.log(x,y, "9")
     } 
     if (x == 891 && y <= 183 && y!= 2 && y > 1){
         x += 0
        //  console.log(x,y)
         y -= 5
        //  console.log(x,y, "10")
    } 
    if (x >= 891 && x != 1052 && x < 1053 && y == 2){
        x += 5
        // console.log(x,y)
        y += 0
        // console.log(x,y, "11")
     } 
     if (x == 1056 && y >= 2 && y!= 182 && y < 181){
        x += 0
        // console.log(x,y)
        y += 5
        // console.log(x,y, "12")
   } 
   if (x >= 1056 && x != 1652 && x < 1653 && y == 182){
    x += 5
    // console.log(x,y)
    y += 0
    // console.log(x,y, "13")
 } 
     

}

// y-move prototype === up -------------------------------------------------------

// if (x == 891 && y <= start && y!= stop && y > stop+1 ){
//     x += 0
//     console.log(x,y)
//     y -= 5
//     console.log(x,y, "10")
// } 

// y-move prototype === up---------------------------------------------------------

// y-move prototype === down---------------------------------------------------------

// if (x == 641 && y >= start && y!= stop && y < stop-1 ){
//     console.log(x,y, "8")
//     x += 0
//     y += 5
//     console.log(x,y)
// } 

// y-move prototype === down---------------------------------------------------------






// directions = ["r","r","r","r","r","r","r","r","r","r","l","l","l","l","l","l","l","l","l","l","u","u","u","u","u","u","u","u","u","u","d","d","d","d","d","d","d","d","d","d"]

// function movements(){
//     directions.forEach(function(direction){
//         switch(direction){
//             case "r":
//                 console.log("r")
//                 for (let i = 0; i < 10; i++) {
//                     console.log(x)
//                     x += 1
//                     y += 0 
//                     console.log(x)
//                 };
//                 break;
//             case "l":
//                     for (let i = 0; i < 10; i++) {
//                         x -= 1
//                         y += 0 
//                     };
//                     break;
//             case "u":
//                     for (let i = 0; i < 10; i++) {
//                         x += 
//                         y += 1 
//                     };
//                     break;
//             case "d":
//                     for (let i = 0; i < 10; i++) {
//                         x += 0
//                         y -= 1 
//                     };
//                     break;
//         }
//     })
// }
 

  function moveCanvas(){
      
      
      requestAnimationFrame(moveCanvas)
      
      
      c.fillStyle = 'rgba(1, 2, 20, .1)';
      c.fillRect(0, 0, innerWidth, innerHeight)

      movements()

      
      c.drawImage(myImg, imageX, imageY);
      object(x, y)

}


moveCanvas()

