let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (human, computer, target) => {
    if ( human <= 0 || human >= 10) {
        window.alert('Please enter a number between 0 and 10.');
    }
    let userGuess = Math.abs(target - human);
    let compGuess = Math.abs(target - computer);
        return userGuess <= compGuess;
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++
    } else if (winner === 'computer') {
        computerScore++
    }
};

const advanceRound = () => currentRoundNumber++;
