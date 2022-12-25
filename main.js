let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let reset = document.getElementsByClassName(".reset");
let cell1 = document.getElementById("cell-0-0");
let cell2 = document.getElementById("cell-0-1");
let cell3 = document.getElementById("cell-0-2");
let cell4 = document.getElementById("cell-1-0");
let cell5 = document.getElementById("cell-1-1");
let cell6 = document.getElementById("cell-1-2");
let cell7 = document.getElementById("cell-2-0");
let cell8 = document.getElementById("cell-2-1");
let cell9 = document.getElementById("cell-2-2");
let flag = 1;
let xPlayer = 0;
let oPlayer = 0;
let draw = 0;
let xPlayerRank = document.getElementById("cell-3-0");
let oPlayerRank = document.getElementById("cell-3-2");
let drawRank = document.getElementById("cell-3-1");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let container = document.getElementById("container");
let playGround = document.getElementById("playGround");

/***click ***/

function clicked1() {
  if (board[0][0] === "" && flag === 1) {
    cell1.innerHTML = "X";
    board[0][0] = "X";
    flag = 0;
  } else if (board[0][0] === "" && flag === 0) {
    cell1.innerHTML = "O";
    board[0][0] = "O";
    flag = 1;
  }
  cell1.style.backgroundColor = "gray";
}

function clicked2() {
  if (board[0][1] === "" && flag === 1) {
    cell2.innerHTML = "X";
    board[0][1] = "X";
    flag = 0;
  } else if (board[0][1] === "" && flag === 0) {
    cell2.innerHTML = "O";
    board[0][1] = "O";
    flag = 1;
  }
  cell2.style.backgroundColor = "gray";
}

function clicked3() {
  if (board[0][2] === "" && flag === 1) {
    cell3.innerHTML = "X";
    board[0][2] = "X";
    flag = 0;
  } else if (board[0][2] === "" && flag === 0) {
    cell3.innerHTML = "O";
    board[0][2] = "O";
    flag = 1;
  }
  cell3.style.backgroundColor = "gray";
}

function clicked4() {
  if (board[1][0] === "" && flag === 1) {
    cell4.innerHTML = "X";
    board[1][0] = "X";
    flag = 0;
  } else if (board[1][0] === "" && flag === 0) {
    cell4.innerHTML = "O";
    board[1][0] = "O";
    flag = 1;
  }
  cell4.style.backgroundColor = "gray";
}

function clicked5() {
  if (board[1][1] === "" && flag === 1) {
    cell5.innerHTML = "X";
    board[1][1] = "X";
    flag = 0;
  } else if (board[1][1] === "" && flag === 0) {
    cell5.innerHTML = "O";
    board[1][1] = "O";
    flag = 1;
  }
  cell5.style.backgroundColor = "gray";
}

function clicked6() {
  if (board[1][2] === "" && flag === 1) {
    cell6.innerHTML = "X";
    board[1][2] = "X";
    flag = 0;
  } else if (board[1][2] === "" && flag === 0) {
    cell6.innerHTML = "O";
    board[1][2] = "O";
    flag = 1;
  }
  cell6.style.backgroundColor = "gray";
}

function clicked7() {
  if (board[2][0] === "" && flag === 1) {
    cell7.innerHTML = "X";
    board[2][0] = "X";
    flag = 0;
  } else if (board[2][0] === "" && flag === 0) {
    cell7.innerHTML = "O";
    board[2][0] = "O";
    flag = 1;
  }
  cell7.style.backgroundColor = "gray";
}

function clicked8() {
  if (board[2][1] === "" && flag === 1) {
    cell8.innerHTML = "X";
    board[2][1] = "X";
    flag = 0;
  } else if (board[2][1] === "" && flag === 0) {
    cell8.innerHTML = "O";
    board[2][1] = "O";
    flag = 1;
  }
  cell8.style.backgroundColor = "gray";
}

function clicked9() {
  if (board[2][2] === "" && flag === 1) {
    cell9.innerHTML = "X";
    board[2][2] = "X";
    flag = 0;
  } else if (board[2][2] === "" && flag === 0) {
    cell9.innerHTML = "O";
    board[2][2] = "O";
    flag = 1;
  }
  cell9.style.backgroundColor = "gray";
}

/***reset ***/
function resetBoard() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  cell1.innerHTML = "";
  cell2.innerHTML = "";
  cell3.innerHTML = "";
  cell4.innerHTML = "";
  cell5.innerHTML = "";
  cell6.innerHTML = "";
  cell7.innerHTML = "";
  cell8.innerHTML = "";
  cell9.innerHTML = "";
  cell1.style.backgroundColor = "";
  cell2.style.backgroundColor = "";
  cell3.style.backgroundColor = "";
  cell4.style.backgroundColor = "";
  cell5.style.backgroundColor = "";
  cell6.style.backgroundColor = "";
  cell7.style.backgroundColor = "";
  cell8.style.backgroundColor = "";
  cell9.style.backgroundColor = "";
}

/***** who win ****/

function checkWin() {
  if (
    (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") ||
    (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X") ||
    (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X") ||
    (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") ||
    (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") ||
    (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") ||
    (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") ||
    (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X")
  ) {
    alert("X win");
    resetBoard();
    xPlayer++;
    xPlayerRank.innerHTML = xPlayer;
  } else if (
    (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O") ||
    (board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O") ||
    (board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O") ||
    (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") ||
    (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O") ||
    (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O") ||
    (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O") ||
    (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O")
  ) {
    alert("O win");
    resetBoard();
    oPlayer++;
    oPlayerRank.innerHTML = oPlayer;
  } else if (
    (board[0][0] === "X" || board[0][0] === "O") &&
    (board[0][1] === "X" || board[0][1] === "O") &&
    (board[0][2] === "X" || board[0][2] === "O") &&
    (board[1][0] === "X" || board[1][0] === "O") &&
    (board[1][1] === "X" || board[1][1] === "O") &&
    (board[1][2] === "X" || board[1][2] === "O") &&
    (board[2][0] === "X" || board[2][0] === "O") &&
    (board[2][1] === "X" || board[2][1] === "O") &&
    (board[2][2] === "X" || board[2][2] === "O")
  ) {
    alert("draw");
    resetBoard();
    draw++;
    drawRank.innerHTML = draw;
  }
}

function resetFunc() {
  resetBoard();
  resetRank();
}

function resetRank() {
  xPlayer = "";
  oPlayer = "";
  draw = "";
  xPlayerRank.innerHTML = "X";
  oPlayerRank.innerHTML = "O";
  drawRank.innerHTML = "draw";
}

/***button ***/

function btn1Func() {
  container.style.visibility = "visible";
  playGround.style.visibility = "hidden";
  playGround.style.zIndex = "-1";
  container.style.zIndex = "1";
  console.log("clicked");
}
