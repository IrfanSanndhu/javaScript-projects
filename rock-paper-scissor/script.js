let score = JSON.parse(localStorage.getItem("score")) || { 
    wins: 0,
    losses: 0,
    draws: 0
    };

function resetValues() {
    score = {
        wins: 0,
        losses: 0,
        draws: 0
    };
    localStorage.removeItem("score");
}

function player(playerMove) {
    const computerMove = getComputerMove();
    // let result = '';
    if (playerMove === 'scissor'){
        if (computerMove === 'scissor'){
            score.draws++;
            alert("It's a draw!");
        } else if (computerMove === 'rock'){
            score.losses++;
            alert("You lose!");
        } else {
            score.wins++;
            alert("You win!");
        }
    } else if (playerMove === 'rock'){
        if (computerMove === 'scissor'){
            score.wins++;
            alert("You win!");
        } else if (computerMove === 'rock'){
            score.draws++;
            alert("It's a draw!");
        } else {
            score.losses++;
            alert("You lose!");
        }
    } else {
        if (computerMove === 'scissor'){
            score.losses++;
            alert("You lose!");
        } else if (computerMove === 'rock'){
            score.wins++;
            alert("You win!");
        } else {
            score.draws++;
            alert("It's a draw!");
        }
    }
    localStorage.setItem("score", JSON.stringify(score));
    let result = document.querySelector(".result");
    result.innerHTML = `You chose ${playerMove} and the computer chose ${computerMove}. 
    Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`;
}

function getComputerMove() {
    const moves = Math.random();
    console.log(moves);
    if (moves < 0.34) return "rock";
    if (moves >= 0.34 && moves < 0.67) return "paper";
    return "scissor";
}