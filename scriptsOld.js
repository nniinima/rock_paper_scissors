//Randomly return Rock, Paper or Scissors
function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

//play a single round
function gameRound(playerSelection, computerSelection) {
    playerHand = playerSelection.toLowerCase();
    if (playerHand == computerSelection) {
        return "It's a draw!"
    }   else if (playerHand == 'rock') {
            if (computerSelection == 'paper') {
                return 'You lose!';
            }   else {
                    return 'You win!';
                }
        }   else if (playerHand == 'scissor') {
                if (computerSelection == 'rock') {
                    return 'You lose!';
                }   else {
                        return 'You win!';
                    }
            }   else if (playerHand == 'paper') {
                    if (computerSelection == 'scissor') {
                        return 'You lose!';
                    }   else {
                            return 'You win!';
                        }
                }   else {
                        return "Invalid selection"
                    }
}

//keep count of score and loop game until 5 rounds are played.
function runGame() {
let computerScore = 0
let playerScore = 0
let rounds

for (rounds = 0; rounds < 5; rounds++){
let input = prompt("Rock, paper or scissors?");
let computerChoice = computerPlay();
let result = (gameRound(input, computerChoice));

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

if (rounds == 5) {
    if (computerScore >= 3) {
        console.log("Computer wins the game! Better luck next time.");
    }   else {
            console.log("You win the game! Congratulations!");
        }
} 

}

runGame();