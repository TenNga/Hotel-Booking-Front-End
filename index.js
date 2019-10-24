const baseURL = "http://localhost:3000/"
const sessionURL = `${baseURL}sessions`
const playerURL = `${baseURL}players`
let userId;
let isLogin = false;

document.addEventListener("DOMContentLoaded", function(){

  const loginDiv = document.querySelector('.login');
  const playerInfo = document.querySelector('.player-details')
  const playerRecord = document.querySelector('.record-times')
  const topScoreContainer = document.querySelector('#scores')
  const form = document.querySelector('#userNameForm');
  const userInput = document.querySelector('#userName');

  createGrid()
  processPlayerMove(currentPosition)
  login();

  
      
  //Pop-up login window return Username
  function login() {
    form.addEventListener('submit',(event)=> {
      event.preventDefault();
      createUser(userInput.value);
      loginDiv.style.display = "none";
    });
    isLogin = true;
  }

  //save userId and insert username in HTML
  function setUserName(user){
    userId = user.id;
    playerInfo.insertAdjacentHTML('beforeend',
    `
    <h3>Player: ${user.name}</h3>
    `)
  }

  //create user in DB and paste the return new user to setUserName()
  function createUser(name){
    fetch(playerURL, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
      },
      body: JSON.stringify({
              name: name
          })
  }).then(resp=>resp.json()) //only if you want to get the data back
      .then(data => setUserName(data))
  }



  fetch(sessionURL)
            .then(resp=>resp.json())
            .then(datas=>{ 
                topScore(datas)
            })

  function topScore(scores){
    const sortedScores = scores.sort((a,b)=> b.score - a.score);
    //sortedScores.length = 2;
    sortedScores.forEach((score)=>{insertScore(score)});
  }

  function insertScore(score){
    topScoreContainer.insertAdjacentHTML('beforeend',`
      <h3>${score.player.name} :: ${score.score}</h3>
    `)
  }

  

  captureKey = e => {
    console.log('hehehehehhee')
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

  if(isLogin){ //allow only after login
    document.addEventListener('keydown',captureKey);
  }
})
