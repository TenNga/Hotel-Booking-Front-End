document.addEventListener("DOMContentLoaded", function(){

  const loginDiv = document.querySelector('.login');
  const form = document.querySelector('#userNameForm');
  const userInput = document.querySelector('#userName');
  let userName;
  createGrid()
  renderBot(currentPosition)
  login();
  setTimeout(() => {
    bullMove();
  }, 3000);
      
  function login() {
    form.addEventListener('submit',(event)=> {
      event.preventDefault();
      userName = userInput.value;
      loginDiv.style.display = "none";
    })
  }

  

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
