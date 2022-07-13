// computer picks rock, paper or scisors. randomly seleted from array output: rock
const computerPlay = () => {
    // options for computer to choose
    const options = ["Rock", "Paper", "Scissors"];
    // selection an option at random.
    const randomOption = Math.floor(Math.random() * options.length)
    // assigning random option to a variable.
    const computerChoice = options[randomOption]
    // returing the variable.
    return computerChoice;
}
