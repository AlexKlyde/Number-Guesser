let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generate the new secret target number.
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// compare the absolute value of the difference between the target and each guess
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);
  return humanDifference <= computerDifference;
};

// Increase the winner’s score after each round.
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

//update the round number after each round.
const advanceRound = () => currentRoundNumber++;
