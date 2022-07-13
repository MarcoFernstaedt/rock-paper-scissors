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

const computerSelected = computerPlay()
const playerSelected = "rock"

// plays through a round
const playRound = (computerSelected, playerSelected) => {
    // to prevent case sensitive errors
    playerSelected.toLowerCase()
    // all possible scenarios which player wins, if player loses else statment takes over
    if (playerSelected === "rock" && computerSelected === "scissors") {
        return `You Win! ${playerSelected} beats ${computerSelected}`
    } else if (playerSelected === "paper" && computerSelected === "rock") {
        return `You Win! ${playerSelected} beats ${computerSelected}`
    } else if (playerSelected === "scissors" && computerSelected === "paper") {
        return `You Win! ${playerSelected} beats ${computerSelected}`
    } else if (playerSelected === computerSelected) {
        return `Tie! better luck next time`
    } else {
        return `You Lose! ${computerSelected} beats ${playerSelected}`
    }
}
