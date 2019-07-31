// TODO: win conditions
// TODO: player names
// TODO: text on site instead of alert 

const player1Score = 0;
const player2Score = 0;

// colors for players
const myBlue = "rgb(0, 51, 102)";
const myRed = "rgb(128, 0, 0)";

// gets increased with every move up until 9, reset to 1
var turn = 1;
var player = 0;

// cache the dom - store needed things in variables
// dom variables: name_type
const player1Score_span = document.getElementById('player1-score');
const player2Score_span = document.getElementById('player2-score');
const scoreboard_div = document.querySelector(".score-board");
const messages_div = document.querySelector(".messages");
const button_bt = document.querySelector("button");
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

// listeners for cells
cell1_td.addEventListener("click", function(){move(cell1_td);});
cell2_td.addEventListener("click", function(){move(cell2_td);});
cell3_td.addEventListener("click", function(){move(cell3_td);});
cell4_td.addEventListener("click", function(){move(cell4_td);});
cell5_td.addEventListener("click", function(){move(cell5_td);});
cell6_td.addEventListener("click", function(){move(cell6_td);});
cell7_td.addEventListener("click", function(){move(cell7_td);});
cell8_td.addEventListener("click", function(){move(cell8_td);});
cell9_td.addEventListener("click", function(){move(cell9_td);});

// to edit values on all cells
const cells = [ cell1_td,cell2_td,cell3_td,
                cell4_td,cell5_td,cell6_td,
                cell7_td,cell8_td,cell9_td ]

const winningCombinations = [[1,2,3],[4,5,6],[7,8,9], // horizontal
                             [1,4,7],[2,5,8],[3,6,9], // vertical
                             [1,5,9],[3,5,7]]         // diagonal

button_bt.addEventListener("click", function(){newGame();});

/*
function changeHoverColor(cells) {
  for(i=0; i>cells.length; i++){

  }
}
*/

function move(elem){
  if (elem.style.backgroundColor == "") {
    if (player == 1) {
      elem.style.backgroundColor = myBlue;
      elem.innerText = "1";
      checkWin();
      player = 2;
      turn++;
    }
    else {
      elem.style.backgroundColor = myRed;
      elem.innerText = "2";
      checkWin();
      player = 1;
      turn++;
    }
  }
  // bug free place for this..
  if(turn > 9){
    alert("DRAW");
    newGame();
  }
}

function newGame(){
  for(i=0; i<cells.length; i++){
    cells[i].style.backgroundColor = "";
    cells[i].innerText = 0;
  }
  turn = 1;
  // with each new game the starting player is switched
  player == 1 ? player= 2 : player = 1;
  alert("beginning player: " + player);
}

function checkWin(){
  // no possible turns left
  console.log(turn);
  for(i=0; i<winningCombinations.length; i++) {
    // for less code in the if statement
    let a = winningCombinations[i][0];
    let b = winningCombinations[i][1];
    let c = winningCombinations[i][2];
/*
    if (cells[a].innerText == cells[b].innerText == cells[c].innerText &&
        cells[a].innerText == player){
      console.log(winningCombinations[i]);
    }*/
  }
}

//------------------------------------------------------------------------------

newGame();
