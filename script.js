function getComputerChoice() {
    const randomNumber = Math.random(); // Generates a random number between 0 (inclusive) and 1 (exclusive)

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getHumanChoice() {
    let userChoice = prompt("Please choose rock, paper, or scissors:").toLowerCase();

    // Validate the user input
    while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        userChoice = prompt("Invalid choice. Please choose rock, paper, or scissors:").toLowerCase();
    }

    return userChoice;
}

// Test the function
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    console.log(`You chose: ${humanChoice}`);
    console.log(`The computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
    }

    // Display the current scores
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
    // Declare score variables inside the playGame function
    let humanScore = 0;
    let computerScore = 0;

    // The function to play a single round
    function playRound(humanChoice, computerChoice) {
        console.log(`You chose: ${humanChoice}`);
        console.log(`The computer chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore++;
            console.log(`You win this round! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose this round! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        }

        // Display the current scores
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round} of 5`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    // Declare the overall winner
    console.log("\nFinal Results:");
    if (humanScore > computerScore) {
        console.log(`You are the overall winner! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`The computer wins the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`It's a tie! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
}
playGame();

