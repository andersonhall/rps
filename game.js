function computerPlay() {
  const random = Math.floor(Math.random() * 3);
  const options = ['ROCK', 'PAPER', 'SCISSORS'];
  return options[random];
}

function isGameOver(p, c) {
  if (p === 5 || c === 5) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.disabled = true;
      btn.style.background = 'grey';
    });
    const result = document.querySelector('.result');
    if (p === 5) {
      result.textContent = 'YOU WIN THE GAME!';
    } else {
      result.textContent = 'YOU LOSE THE GAME!';
    }
  }
}

let pScore = 0;
let cScore = 0;

function playRound(playerSelection, computerSelection) {
  const result = document.querySelector('.result');
  const pScoreEl = document.querySelector('.pScore');
  const cScoreEl = document.querySelector('.cScore');

  pScoreEl.textContent = pScore;
  cScoreEl.textContent = cScore;

  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toUpperCase();
  if (
    (playerSelection === 'ROCK' && computerSelection === 'ROCK') ||
    (playerSelection === 'PAPER' && computerSelection === 'PAPER') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS')
  ) {
    result.textContent = "It's a tie!";
  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    result.textContent = 'You Win! Paper beats Rock!';
    pScore++;
    pScoreEl.textContent = pScore;
    isGameOver(pScore, cScore);
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
    result.textContent = 'You Win! Scissors beats Paper!';
    pScore++;
    pScoreEl.textContent = pScore;
    isGameOver(pScore, cScore);
  } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
    result.textContent = 'You Win! Rock beats Scissors!';
    pScore++;
    pScoreEl.textContent = pScore;
    isGameOver(pScore, cScore);
  } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
    result.textContent = 'You Lose! Scissors beats Paper!';
    cScore++;
    cScoreEl.textContent = cScore;
    isGameOver(pScore, cScore);
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
    result.textContent = 'You Lose! Rock beats Scissors!';
    cScore++;
    cScoreEl.textContent = cScore;
    isGameOver(pScore, cScore);
  } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
    result.textContent = 'You Lose! Paper beats Rock!';
    cScore++;
    cScoreEl.textContent = cScore;
    isGameOver(pScore, cScore);
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    playRound(e.target.id, computerPlay());
  });
});
