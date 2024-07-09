let cells = document.querySelectorAll('.cell');
let playerXSide = document.querySelector('#playerXScore');
let playerOSide = document.querySelector('#playerOScore');
let newGamebutton = document.querySelector('#newgame')
let resetGamebutton = document.querySelector('#resetGame')
let turnx = true;
let players = ['X', 'O'];
let currentPlayer = players[0];
let winnerIS = false;
let turnCounter = 0;
let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let winnerPlayer = "";
let playerXScore = 0;
let playerOScore = 0;


cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (turnx) {
            currentPlayer = players[0];
            cell.innerText = 'X';
            turnx = false;
        }
        else {
            currentPlayer = players[1];
            cell.innerText = 'O';
            turnx = true;
        }
        cell.disabled = true;
        turnCounter++;
        // currentPlayer = 'X'
        CheckWIN(cell);

        // console.log(turnCounter);


    })
})


function CheckWIN() {
    for (let i = 0; i < winPattern.length; i++) {
        const [a, b, c] = winPattern[i];
        if (cells[a].innerHTML === currentPlayer && cells[b].innerHTML === currentPlayer && cells[c].innerHTML === currentPlayer) {
            ShowWin();
        }
    }
}


function ShowWin() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].disabled = true;
    }


    if (currentPlayer === players[0]) {
        playerXScore++;
        playerXSide.innerHTML = playerXScore;
    }
    else {
        playerOScore++;
        playerOSide.innerHTML = playerOScore;
    }

    currentPlayer = "X";
    turnx = true;
}



// new game button
newGamebutton.addEventListener("click", () => {
    currentPlayer = 'X';
    winnerIS = false;
    turnx = true;
    turnCounter = 0;
    cells.forEach((cell) => {
        cell.disabled = false;
        cell.innerHTML = "";
    });
});


// resetgamebutton
resetGamebutton.addEventListener("click", () => {
    currentPlayer = 'X';
    winnerIS = false;
    turnx = true;
    turnCounter = 0;
    cells.forEach((cell) => {
        cell.disabled = false;
        cell.innerHTML = "";
    });
    playerOScore = 0;
    playerXScore = 0;
    playerOSide.innerHTML = "0";
    playerXSide.innerHTML = "0";
});

//endgame
