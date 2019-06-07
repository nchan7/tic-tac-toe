console.log('loaded!')
// Variables

var win = [["one","two","three"], ["four","five","six"], ["seven","eight","nine"], ["one","four","seven"], ["two","five","eight"], ["three","six","nine"], ["one","five","nine"], ["three","five","seven"]];
var gameOver = false;
var playedArr = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false
    
};
var turn = 1;  // 1 = player 1 and 2 = player 2
var img1 = "img/Nic1.jpg";
var img2 = "img/Nic2.jpg";
var player1 = [];
var player2 = [];

// DOM References

var resetButton;
var board;
var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
var nine;
var h2El; 

// Event Listener
document.addEventListener("DOMContentLoaded", function() {
    resetButton = document.getElementById("reset");
    board = document.getElementById("board");
    one = document.getElementById("one");
    two = document.getElementById("two");
    three = document.getElementById("three");
    four = document.getElementById("four");
    five = document.getElementById("five");
    six = document.getElementById("six");
    seven = document.getElementById("seven");
    eight = document.getElementById("eight");
    nine = document.getElementById("nine");
    h2El = document.getElementById("congratulations");


    resetButton.addEventListener("click", function() {
        reset();
    });

    board.addEventListener("click", function (e) { // click on space, image pops up, checks for win
        // console.log(playedArr);
        // console.log(e.target);
        if (!playedArr[e.target.id] && !gameOver) {
            if (turn === 1) {
                // console.log(e.target.src)
                e.target.src = img1;
                console.log(e.target.id);
                // e.target.classList.remove("hidden");
                e.target.classList.add("visible");
                player1.push(e.target.id);
                if (checkWin(player1)) {
                    h2El.textContent = "Congratulations Player 1 Wins!";
                    endGame();
                } else {
                    console.log("It's a tie!");
                }
                turn = 2;
                // console.log("player1");
            } else {
                // console.log(e.target.src)
                e.target.src = img2;
                // e.target.classList.remove("hidden");
                e.target.classList.add("visible");
                player2.push(e.target.id);
                if (checkWin(player2)) {
                    console.log("Player 2 Wins!");
                    h2El.textContent = "Congratulations Player 2 Wins!";
                    endGame();
                } else {
                    console.log("It's a tie!");
                }
                turn = 1;
                // console.log("player2");
            }
            playedArr[e.target.id] = true;
        }
    })



})

// Functions

function checkWin (playerArr) {
    for (let i = 0; i < win.length; i++) {
        var first = playerArr.includes(win[i][0]);
        var second = playerArr.includes(win[i][1]);
        var third = playerArr.includes(win[i][2]);
        if (first && second && third) {
            return true;
        }
    } 
    return false;


}
// function checkArr(winItem) {
//     // for (let j = 0; j < win.length-1; j++) {
//     //     if (win[i][j] === win[i])
//     // }
//     var first = winItem[0];
//     return winItem.every(function(element) {
//         return element === first;
//     });
// }

function endGame() {
    gameOver = true; 
    playedArr = {
        one: true,
        two: true,
        three: true,
        four: true,
        five: true,
        six: true,
        seven: true,
        eight: true,
        nine: true
        
    };
}

function reset() {
    gameOver = false;
    player1 = [];
    player2 = [];
    playedArr = {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
        nine: false
        
    };
    turn = 1;
    one.src=""; 
    two.src="";
    three.src="";
    four.src="";
    five.src="";
    six.src="";
    seven.src="";
    eight.src="";
    nine.src="";
    h2El.textContent = ""
}

// potentially add class hidden
