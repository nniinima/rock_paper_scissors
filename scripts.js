//Randomly return Rock, Paper or Scissors
function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

//play a single round
function playRound(playerSelection) {
    playerHand = playerSelection.toLowerCase();
    options = ['rock', 'paper', 'scissors'];
    computerSelection = options[Math.floor(Math.random() * options.length)];
    if (playerHand == computerSelection) {
        return "It's a draw!"
    }   else if (playerHand == 'rock') {
            if (computerSelection == 'paper') {
                return 'You lose!';
            }   else {
                    return 'You win!';
                }
        }   else if (playerHand == 'scissors') {
                if (computerSelection == 'rock') {
                    return 'You lose!';
                }   else {
                        return 'You win!';
                    }
            }   else if (playerHand == 'paper') {
                    if (computerSelection == 'scissors') {
                        return 'You lose!';
                    }   else {
                            return 'You win!';
                        }
                }   else {
                        return "ERROR"
                    }
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        let computerScore = document.getElementById("computer").textContent;
        let playerScore = document.getElementById("player").textContent;
        result = playRound(button.id);
        if (result == 'You win!') {
            console.log(result);
            playerScore++;
            document.getElementById("player").textContent = playerScore;
            document.getElementById("message").textContent = result;
        } else if (result == 'You lose!') {
            console.log(result);
            computerScore++;
            document.getElementById("computer").textContent = computerScore;
            document.getElementById("message").textContent = result;
        } else if (result == "It's a draw!"){
            document.getElementById("message").textContent = result;
        }
        if (playerScore == 5) {
            document.getElementById("message").textContent = 'You have defeated the computer! Congratulations!';
            computerScore = 0;
            playerScore = 0;
            document.getElementById("player").textContent = playerScore;
            document.getElementById("computer").textContent = computerScore;
        }
        if (computerScore == 5) {
            document.getElementById("message").textContent = 'You have been defeated by the computer! Better luck next time!';
            computerScore = 0;
            playerScore = 0;
            document.getElementById("player").textContent = playerScore;
            document.getElementById("computer").textContent = computerScore;
        }
    });
});

//keep count of score and loop game until 5 rounds are played.
/* function runGame() {
let computerScore = 0
let playerScore = 0
let rounds

for (rounds = 0; rounds < 5; rounds++){
let input = prompt("Rock, paper or scissors?");
let computerChoice = computerPlay();
let result = (playRound(input, computerChoice));

if (result == 'You lose!') {
    computerScore++;
    console.log(result);
    console.log('Computer: ', computerScore, 'Player: ', playerScore)
}   else if (result == 'You win!'){
        playerScore++;
        console.log(result);
        console.log('Computer: ', computerScore, 'Player: ', playerScore)
    }   else if (result == "It's a draw!"){
            rounds--;
            console.log("draw");
        }   else {
                rounds--;
                console.log("invalid game");
            }
}
}

runGame(); */