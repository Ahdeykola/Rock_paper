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
