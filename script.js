// computer picks rock, paper or scisors. randomly seleted from array output: rock
const computerPlay = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomOption = Math.floor(Math.random() * options.length)
    const computerChoice = options[randomOption]
    return computerChoice;
}

console.log(computerPlay())