document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)
  setTimeout(() => {
    bullMove();
  }, 3000);
      

  captureKey = e => {
    switch(e.code){
      case "ArrowDown":
        // addToMove(e.code);
        move("down");
        break;
      case "ArrowUp":
        // addToMove(e.code);
        move("up");
        break;
      case "ArrowRight":
        // addToMove(e.code);
        move("right");
        break;
      case "ArrowLeft":
        // addToMove(e.code);
        move("left");
        break;
      case "Backspace":
        // deleteByKey();
        move("left");
        break;
    }
  }


  document.addEventListener('keydown',captureKey);
})
