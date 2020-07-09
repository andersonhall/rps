function computerPlay() {
  const random = Math.floor(Math.random() * 3);
  const options = ['ROCK', 'PAPER', 'SCISSORS'];
  return options[random];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toUpperCase();
  if (
    (playerSelection === 'ROCK' && computerSelection === 'ROCK') ||
    (playerSelection === 'PAPER' && computerSelection === 'PAPER') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS')
  ) {
    return 'It is a tie!';
  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    return 'You Win! Paper beats Rock!';
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
    return 'You Win! Scissors beats Paper!';
  } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
    return 'You Win! Rock beats Scissors!';
  } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
    return 'You Lose! Scissors beats Paper!';
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
    return 'You Lose! Rock beats Scissors!';
  } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
    return 'You Lose! Paper beats Rock!';
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundsToPlay = 5;

  while (roundsToPlay > 0) {
    let playerSelection = prompt('Choose rock, paper, or scissors').toUpperCase();
    while (
      playerSelection !== 'ROCK' &&
      playerSelection !== 'SCISSORS' &&
      playerSelection !== 'PAPER'
    ) {
      playerSelection = prompt(
        `I didn't get that... please only enter rock, paper, or scissors`
      ).toUpperCase();
    }
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result.startsWith('You Win')) {
      playerScore++;
    }
    if (result.startsWith('You Lose')) {
      computerScore++;
    }
    console.log(
      `Player chose: ${playerSelection.toUpperCase()}, Computer chose: ${computerSelection}`
    );
    console.log(result);
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
    roundsToPlay--;
  }

  if (playerScore === computerScore) {
    const result = 'It is a tie!';
    console.log(`Game over. ${result}`);
  } else if (playerScore > computerScore) {
    const result = 'Player wins!';
    console.log(`Game over. ${result}`);
  } else if (playerScore < computerScore) {
    const result = 'Computer wins!';
    console.log(`Game over. ${result}`);
  }
}

game();
