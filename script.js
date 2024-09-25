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

