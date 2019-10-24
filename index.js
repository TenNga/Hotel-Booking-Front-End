document.addEventListener("DOMContentLoaded", function(){

  const loginDiv = document.querySelector('.login');
  const playerInfo = document.querySelector('.player-details')
  
  const form = document.querySelector('#userNameForm');
  const userInput = document.querySelector('#userName');
  createGrid()
  renderBot(currentPosition)
  login();

  
      
  function login() {
    form.addEventListener('submit',(event)=> {
      event.preventDefault();
      setUserName(userInput.value);
      
      loginDiv.style.display = "none";
    });
  }


  function setUserName(userName){
    playerInfo.insertAdjacentHTML('beforeend',
    `
    <h3>Player: ${userName}</h3>
    `)
  }

  fetch(`http://localhost:3000/sessions`)
            .then(resp=>resp.json())
            .then(datas=>{ 
                datas.forEach(data => {
                    console.log(data) //console log each data if array
                }) 
            })

  

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
setTimeout(() => {
    bullMove();
  }, 3000);

  document.addEventListener('keydown',captureKey);
})
