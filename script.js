// Event listener to look for buttons on page
const choiceButtons = document.querySelectorAll('[data-choice]');



//forEach loop to add event listener and get player choice
choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
      handleButtonClick(button.getAttribute('data-choice').toLowerCase());
  });
});



// function to get the computer's choice.
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}



// variables to keep score.
let playerScore = 0;
let computerScore = 0;



// function to play a single round.
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  
  if (playerSelection === computerSelection.toLowerCase()) {
      return 'It\'s a tie!';
  } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
      playerScore++;
      return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}


// Function play game when button clicks
function handleButtonClick(playerSelection) {

  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  const resultsElement = document.getElementById('results');
  resultsElement.textContent = result;
  updateScoreAndCheckWinner();
}


// Update the score and check for a winner.
function updateScoreAndCheckWinner() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  
  if (playerScore === 5) {
      announceWinner('Player');
  } else if (computerScore === 5) {
      announceWinner('Computer');
  }
}



// Announce the winner.
function announceWinner(winner) {
  const resultsElement = document.getElementById('results');
  resultsElement.textContent = `${winner} wins the game!`;
  


// Disable buttons after the game is won.
  document.querySelectorAll('[data-choice]').forEach(button => {
      button.disabled = true;
  });
}





