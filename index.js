const baseURL = "http://localhost:3000/"
const sessionURL = `${baseURL}sessions`
const playerURL = `${baseURL}players`
let userId;
let isLogin = false;
let avatar = "0";



document.addEventListener("DOMContentLoaded", function(){

  const avatarSelect = document.querySelector('.avatar')
  const loginDiv = document.querySelector('.login');
  const formDiv = document.querySelector('.form');
  const playerInfo = document.querySelector('.player-details')
  const playerRecord = document.querySelector('.record-times')
  const topScoreContainer = document.querySelector('#scores')
  const form = document.querySelector('#userNameForm');
  const userInput = document.querySelector('#userName');

  login();
  createGrid()
  processPlayerMove(currentPosition)
  avatarChoosen();
  getAllScore();
  

  function getPlayerinfo(){
    fetch(`${playerURL}/${userId}`)
            .then(resp=>resp.json())
            .then(data=>{ 
              console.log(data)
                displayPlayerRecords(data)
            })
  }

  function displayPlayerRecords(player){
    player.session.forEach((s)=>{
      playerRecord.insertAdjacentHTML('beforeend',`
   <h3>${s.score}</h3>
   `)
    })
   
  }

  function avatarChoosen(){
    avatarSelect.addEventListener('click',(e)=>{
      // console.log(e.target.className)
      if(e.target.className === "avatarIcon"){
        avatar = e.target.id 
        event.target.style.backgroundColor = "rgb(145, 100, 2)";
      }
    })
  }
      
  //Pop-up login window return Username
  function login() {
    form.addEventListener('submit',(event)=> {
      
      event.preventDefault();
    console.log(userInput.value)
      if(userInput.value !== ""){
      
      if (checkPlayer(userInput.value))
        setUserName(userInput.value);
      else
      createUser(userInput.value);
      loginDiv.style.display = "none";
      formDiv.style.display = "none";
      }
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

  function checkPlayer(name){
    fetch(playerURL)
            .then(resp=>resp.json())
            .then(players=> {
              console.log(players)
      const result =  players.find((player)=>{
                    return player.name === name;
                    })
    if(result){
      userId = result.id;
        getPlayerinfo();
        return true;
    }
    else
      return false;
    })
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

  // _____________________________________________________________________________________________________________


function getAllScore(){
  fetch(sessionURL)
            .then(resp=>resp.json())
            .then(datas=>{ 
                topScore(datas)
            })
          }

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












