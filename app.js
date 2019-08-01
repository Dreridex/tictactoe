// TODO: hover in 2 colors

let player1Score = 0;
let player2Score = 0;
// for names
let player1 = "player1";
let player2 = "player2";
// colors for players
const myBlue = "rgb(0, 51, 102)";
const myRed = "rgb(128, 0, 0)";
// gets increased with every move up until 9, reset to 1
let turn = 1;
let player = 1;
// cache the dom - store needed things in variables
// dom variables: name_type
const player1Score_span = document.getElementById("player1-score");
const player2Score_span = document.getElementById("player2-score");
const player1_label = document.getElementById("player1-label");
const player2_label = document.getElementById("player2-label");
const messages_div = document.querySelector(".messages");
const newGame_bt = document.getElementById("new-game-button");
// for name changing
const name_player1_text = document.getElementById("name1-text");
const name_player1_bt = document.getElementById("name1-button");
const name_player2_text = document.getElementById("name2-text");
const name_player2_bt = document.getElementById("name2-button");
// get all cells
const cell1_td = document.getElementById("cell-1");
const cell2_td = document.getElementById("cell-2");
const cell3_td = document.getElementById("cell-3");
const cell4_td = document.getElementById("cell-4");
const cell5_td = document.getElementById("cell-5");
const cell6_td = document.getElementById("cell-6");
const cell7_td = document.getElementById("cell-7");
const cell8_td = document.getElementById("cell-8");
const cell9_td = document.getElementById("cell-9");
// -----------------------------------------------------------------------------
// listeners for cells, move() needs index for next step
cell1_td.addEventListener("click", function(){move(cell1_td, 0);});
cell2_td.addEventListener("click", function(){move(cell2_td, 1);});
cell3_td.addEventListener("click", function(){move(cell3_td, 2);});
cell4_td.addEventListener("click", function(){move(cell4_td, 3);});
cell5_td.addEventListener("click", function(){move(cell5_td, 4);});
cell6_td.addEventListener("click", function(){move(cell6_td, 5);});
cell7_td.addEventListener("click", function(){move(cell7_td, 6);});
cell8_td.addEventListener("click", function(){move(cell8_td, 7);});
cell9_td.addEventListener("click", function(){move(cell9_td, 8);});
// newGame listener
newGame_bt.addEventListener("click", function(){newGame();});
// name change listeners
name_player1_bt.addEventListener("click", function(){changeName(1);})
name_player2_bt.addEventListener("click", function(){changeName(2);})
//------------------------------------------------------------------------------
// to edit values on all cells (used 1 time..)
const cells = [ cell1_td,cell2_td,cell3_td,
                cell4_td,cell5_td,cell6_td,
                cell7_td,cell8_td,cell9_td ]

const winningCombinations = [[1,2,3],[4,5,6],[7,8,9], // horizontal
                             [1,4,7],[2,5,8],[3,6,9], // vertical
                             [1,5,9],[3,5,7]]         // diagonal
// gets filled with 1s und 2s
var cellContentArray = [0,0,0,
                        0,0,0,
                        0,0,0]
//------------------------------------------------------------------------------

/*
function changeHoverColor(cells) {
  for(i=0; i>cells.length; i++){

  }
}
*/

function changeName(int) {
  if (int == 1) {
    player1_label.innerText = name_player1_text.value;
    player1 = name_player1_text.value;
  }
  else {
    player2_label.innerText = name_player2_text.value;
    player2 = name_player2_text.value;
  }
}

function move(elem, index){
  if (elem.style.backgroundColor == "") {
    if (player == 1) {
      elem.style.backgroundColor = myBlue;
      cellContentArray[index] = 1;
      checkWin();
    }
    else {
      elem.style.backgroundColor = myRed;
      cellContentArray[index] = 2;
      checkWin();
    }
  }
}

function newGame(){
  for(i=0; i<cellContentArray.length; i++){
    cells[i].style.backgroundColor = "";
    cellContentArray[i] = 0;
  }
  turn = 1;
  if (player == 1) {
    messages_div.innerText = (player1 + " begins");
  }
  else {
    messages_div.innerText = (player2 + " begins");
  }
  // Math.floor.Math.random() * 2);
  // could randomly choose starting player
}

function checkWin(){
  for(i=0; i<winningCombinations.length; i++) {
    // for less code in the if statement
    let a = winningCombinations[i][0]-1; //for right array index
    let b = winningCombinations[i][1]-1;
    let c = winningCombinations[i][2]-1;

    if (cellContentArray[a] == player &&
        cellContentArray[b] == player &&
        cellContentArray[c] == player) {
      // longer, but can display chosen names now
      if (player == 1) {
        messages_div.innerText = (player1 + " won!");
        if (confirm(player1 + " won!!!\nPress Ok to start a new Game")){
          // loser begins new round
          player1Score++;
          player = 2;
          player1Score_span.innerHTML = player1Score;
          newGame();
          return;
        }
        else {
          messages_div.innerText = ("That's sad :(");
          return;
        }
      }
      else {
        messages_div.innerText = (player2 + " won!");
        if (confirm(player2 + " won!!!\nPress Ok to start a new Game")){
          // loser begins
          player2Score++;
          player = 1;
          player2Score_span.innerHTML = player2Score;
          newGame();
          return;
        }
        else {
          messages_div.innerText = ("That's sad :(");
          return;
        }
      }

    }
  }
  //no winner = increase turn number, switch player to move
  turn++;
  player == 1 ? player = 2 : player = 1;
  if(turn > 9){
    alert("DRAW");
    newGame();
  }
}

//------------------------------------------------------------------------------

newGame();
