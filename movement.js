let currentPosition = {
  x: 4,
  y: 0
};
let bullPosition = {
  x: 4,
  y: 0
};

let gCurrentPosition;
let bullPrevTile;
let prevTile;
let goalTile;

const cells = [];
let playerMoves = [];
NodeList.prototype.find = Array.prototype.find

function createGrid() {
  const board = document.querySelector("#board")

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      board.insertAdjacentHTML("beforeend", `
        <div class="tile" data-x=${j} data-y=${i}></div>
      `)
      const cell = new Cell(j, i);
      cells.push(cell);
    }
  }
  movingGuard();
  createWalls();
  makeGoalTile();
  keyTile();

} //createGrid


function keyTile(){
  const tiles = document.querySelectorAll(".tile")
  const keyTile = tiles.find((tile)=>{
    return parseInt(tile.dataset.x) === 1 && parseInt(tile.dataset.y) === 3;
  })
  keyTile.id="key"
}

function makeGoalTile(){
  const tiles = document.querySelectorAll(".tile")
  goalTile = tiles.find((tile) => {
    return parseInt(tile.dataset.x) === 5 && parseInt(tile.dataset.y) === 9
  })
  goalTile.id = "goal"
}

function createWalls() {
  cells[0].walls.push(...[true, false, false, true])
  cells[1].walls.push(...[true, false, true, false])
  cells[2].walls.push(...[true, false, true, false])
  cells[3].walls.push(...[true, false, true, false])
  cells[4].walls.push(...[true, false, true, false])

  cells[5].walls.push(...[true, true, true, false])
  cells[6].walls.push(...[true, false, false, true])
  cells[7].walls.push(...[true, false, false, false])
  cells[8].walls.push(...[true, false, true, false])
  cells[9].walls.push(...[true, true, false, false])

  cells[10].walls.push(...[false, false, true, true])
  cells[11].walls.push(...[true, false, true, false])
  cells[12].walls.push(...[true, false, true, false])
  cells[13].walls.push(...[true, true, false, false])
  cells[14].walls.push(...[true, false, false, true])

  cells[15].walls.push(...[true, false, true, false])
  cells[16].walls.push(...[false, true, true, false])
  cells[17].walls.push(...[false, false, true, true])
  cells[18].walls.push(...[true, true, false, false])
  cells[19].walls.push(...[false, true, true, true])

  cells[20].walls.push(...[true, false, true, true])
  cells[21].walls.push(...[true, false, false, false])
  cells[22].walls.push(...[true, false, false, false])
  cells[23].walls.push(...[false, true, true, false])
  cells[24].walls.push(...[false, false, false, true])

  cells[25].walls.push(...[true, false, false, false])
  cells[26].walls.push(...[true, false, true, false])
  cells[27].walls.push(...[true, true, true, false])
  cells[28].walls.push(...[false, false, true, true])
  cells[29].walls.push(...[true, true, false, false])

  cells[30].walls.push(...[true, false, false, true])
  cells[31].walls.push(...[false, true, true, false])
  cells[32].walls.push(...[false, false, true, true])
  cells[33].walls.push(...[true, true, false, false])
  cells[34].walls.push(...[false, true, false, true])

  cells[35].walls.push(...[false, false, false, true])
  cells[36].walls.push(...[true, false, true, false])
  cells[37].walls.push(...[true, false, true, false])
  cells[38].walls.push(...[true, true, true, false])
  cells[39].walls.push(...[false, true, false, true])

  cells[40].walls.push(...[false, false, true, true])
  cells[41].walls.push(...[true, true, false, false])
  cells[42].walls.push(...[true, false, false, true])
  cells[43].walls.push(...[false, true, true, false])
  cells[44].walls.push(...[false, true, false, true])

  cells[45].walls.push(...[false, true, true, true])
  cells[46].walls.push(...[true, false, false, true])
  cells[47].walls.push(...[true, false, true, false])
  cells[48].walls.push(...[true, true, false, false])
  cells[49].walls.push(...[false, true, false, true])

  cells[50].walls.push(...[true, false, false, true])
  cells[51].walls.push(...[false, true, true, false])
  cells[52].walls.push(...[false, true, false, true])
  cells[53].walls.push(...[true, false, true, true])
  cells[54].walls.push(...[false, true, false, false])

  cells[55].walls.push(...[true, false, false, true])
  cells[56].walls.push(...[false, true, true, false])
  cells[57].walls.push(...[true, false, false, true])
  cells[58].walls.push(...[false, false, true, false])
  cells[59].walls.push(...[false, true, true, false])

  cells[60].walls.push(...[false, false, true, true])
  cells[61].walls.push(...[true, true, false, false])
  cells[62].walls.push(...[false, false, true, true])
  cells[63].walls.push(...[true, false, true, false])
  cells[64].walls.push(...[false, true, true, false])

  cells[65].walls.push(...[false, true, false, true])
  cells[66].walls.push(...[true, false, false, true])
  cells[67].walls.push(...[false, true, true, false])
  cells[68].walls.push(...[true, false, false, true])
  cells[69].walls.push(...[true, true, false, false])

  cells[70].walls.push(...[true, false, false, true])
  cells[71].walls.push(...[false, false, true, false])
  cells[72].walls.push(...[true, false, true, false])
  cells[73].walls.push(...[true, false, true, false])
  cells[74].walls.push(...[true, true, true, false])

  cells[75].walls.push(...[false, true, false, true])
  cells[76].walls.push(...[false, true, false, true])
  cells[77].walls.push(...[true, false, false, true])
  cells[78].walls.push(...[false, true, true, false])
  cells[79].walls.push(...[false, true, false, true])

  cells[80].walls.push(...[false, false, false, true])
  cells[81].walls.push(...[true, true, false, false])
  cells[82].walls.push(...[true, false, false, true])
  cells[83].walls.push(...[true, true, false, false])
  cells[84].walls.push(...[true, false, false, true])

  cells[85].walls.push(...[false, true, true, false])
  cells[86].walls.push(...[false, false, true, true])
  cells[87].walls.push(...[false, true, false, false])
  cells[88].walls.push(...[true, true, false, true])
  cells[89].walls.push(...[false, true, false, true])

  cells[90].walls.push(...[false, true, true, true])
  cells[91].walls.push(...[false, false, true, true])
  cells[92].walls.push(...[false, true, true, false])
  cells[93].walls.push(...[false, true, true, true])
  cells[94].walls.push(...[false, false, true, true])

  cells[95].walls.push(...[true, true, false, false])
  cells[96].walls.push(...[true, false, true, true])
  cells[97].walls.push(...[false, true, true, false])
  cells[98].walls.push(...[false, false, true, true])
  cells[99].walls.push(...[false, true, true, false])

}

class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.walls = []; //top,right,bottom,left
  }
}

function bullMove() {
  const tiles = document.querySelectorAll(".tile")

  // for(let i = 0; i< playerMoves.length; i++){
  let i = 0;
  const reset = setInterval(() => {
    if (playerMoves.length>1) {
      bullPosition.x = playerMoves[i].x;
      bullPosition.y = playerMoves[i].y;
      if (bullPosition.x === currentPosition.x &&
        bullPosition.y === currentPosition.y) {
          alert("LOSEEEEEE...");
          i--;
          clearInterval(reset);
        }
      const bullTile = tiles.find(function (tile) {
        return parseInt(tile.dataset.x) === bullPosition.x && parseInt(tile.dataset.y) === bullPosition.y
      })

      bullTile.id = "bull";
      i++;
    }
  }, 1300);
}

function processPlayerMove(targetPosition) {
  const tiles = document.querySelectorAll(".tile")

  const newTile = tiles.find(function (tile) {
    return parseInt(tile.dataset.x) === targetPosition.x && parseInt(tile.dataset.y) === targetPosition.y
  })
  if (!newTile) {
    alert("Clang! Hit a wall")
    return false
  } else {
    if (prevTile) {
      prevTile.id = ""
    }
    newTile.id = "robot"
    hitKey(targetPosition);
    prevTile = newTile
    isEscape(targetPosition);
    //guardSawYou(targetPosition);
    return true
  }
} //processPlayerMove

function movingGuard(){
  let gMoves = [cells[6],cells[7],cells[8],cells[9]]
  let i = 0;
  let preGtile;
  let flag = false;
  setInterval(() => {
    gCurrentPosition = {x: gMoves[i].x, y: gMoves[i].y}
    if(gCurrentPosition.x === currentPosition.x && gCurrentPosition.y === currentPosition.y)
      alert("You Loooseeee!")
    const tiles = document.querySelectorAll('.tile')
    const gTile = tiles.find((tile)=>{
      return parseInt(tile.dataset.x) === gCurrentPosition.x && parseInt(tile.dataset.y) === gCurrentPosition.y
    })
    if(preGtile)
      preGtile.id =""

    gTile.id = "movingGuard";
    preGtile = gTile

    if(i===3){
      i=0;
      if(flag === false){
        gMoves = [cells[9],cells[8],cells[7],cells[6]]
        flag = true;
      }
      else if(flag === true){
        gMoves = [cells[6],cells[7],cells[8],cells[9]]
        flag = false;
      }
    }
    else
      i++;
  }, 700);
  
}

function hitKey(position){
  if(position.x === 1 && position.y === 3){
    const maze = document.querySelector('.container')
    maze.setAttribute("id","boardSol");
    setTimeout(() => {
      maze.removeAttribute("id","boardSol");
    },2000);
  }
}

function move(direction) {
  let x = currentPosition.x;
  let y = currentPosition.y;
  const currentCell = cells.find(function (cell) {
    return cell.x === x && cell.y === y;
  })
  switch (direction) {
    case "left":
      if (currentCell.walls[3] === false)
        x--
      break;
    case "right":
      if (currentCell.walls[1] === false)
        x++
      break;
    case "up":
      if (currentCell.walls[0] === false)
        y--
      break;
    case "down":
      if (currentCell.walls[2] === false)
        y++
      break;
  }
playerMoves.push( { x, y } )
  const moved = processPlayerMove({
    x,
    y
  })
  if (moved) {
    currentPosition = { x, y }
  }
} //move

function guardSawYou(location){
  if(gCurrentPosition && gCurrentPosition.x === location.x)
    alert("LOOSSSSEEe")
}

function isEscape(location) {
  if (location.x === 5 && location.y === 9){
    alert("YEAH!!!!!!!!!!!!!! YOU WIN")
     clearInterval(reset);
  }
}
