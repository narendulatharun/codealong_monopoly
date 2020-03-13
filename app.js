var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190]
console.log(board);

const player1_Button = document.getElementById('player-1');
const player2_Button = document.getElementById('player-2');
console.log(player1_Button);
console.log(player2_Button);
player1_Button.addEventListener('click', rollDice_1);

var player1 = ["ProGrad", 0, 1000];
var player2 = ["FACEPREP", 0, 1000];

function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1;
    changeposition_1(player1[1], position);
}

function changeposition_1(old, currentpos) {
    var newposition = old + currentpos;
    player1[1] = newposition;
    console.log(player1[1]);
    updateMoney_1(player1[1]);
}

function updateMoney_1(p1) {
    var updateMoney = 0;
    if (p1 < board.length)
        updateMoney = player1[2] - board[p1 - 1];
    else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
}