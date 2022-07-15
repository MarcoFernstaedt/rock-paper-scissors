// computer picks rock, paper or scisors. randomly seleted from array output: rock
const computerPlay = () => {
    // options for computer to choose
    const options = ["rock", "paper", "scissors"];
    // selection an option at random.
    const randomOption = Math.floor(Math.random() * options.length)
    // assigning random option to a variable.
    const computerChoice = options[randomOption]
    // returing the variable.
    return computerChoice;
}

// keepp track of player score
let playerScore = 0
let computerScore = 0

// plays through a round
const playRound = (computerSelected, playerSelected) => {
    // to prevent case sensitive errors
    playerSelected.toLowerCase()

    // all possible scenarios which player wins, if player loses else statment takes over
    if (playerSelected === "rock" && computerSelected === "scissors") {
        playerScore++
        return `You Win! ${playerSelected} beats ${computerSelected}`
    } else if (playerSelected === "paper" && computerSelected === "rock") {
        playerScore++
        return `You Win! ${playerSelected} beats ${computerSelected}`
    } else if (playerSelected === "scissors" && computerSelected === "paper") {
        playerScore++
        return `You Win! ${playerSelected} beats ${computerSelected}`
    } else if (playerSelected === computerSelected) {
        return `Tie! better luck next time`
    } else {
        computerScore++
        return `You Lose! ${computerSelected} beats ${playerSelected}`
    }
}

// function that starts the game for 5 rounds
const game = () => {
    for (let rounds = 0; rounds < 5; rounds++) {
        // computer and player selection
        const computerSelected = computerPlay()
        const playerSelected = prompt("Please select Rock, Paper or Scissors")

        console.log(playRound(computerSelected, playerSelected))
    }
    // determiing winer
    if (playerScore > computerScore) {
        return console.log(`Player wins with a score of ${playerScore}`)
    } else if (computerScore > playerScore) {
        return console.log(`Computer Wins with a score of ${computerScore}`)
    }
}

game()