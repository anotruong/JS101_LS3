const readline = require('readline-sync');
const VALID_OPTIONS = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const OPTIONS_SHORTHAND = ['rk', 'pr', 'ss', 'ld', 'sk'];
const VALID_CHOICES = VALID_OPTIONS.concat(OPTIONS_SHORTHAND);
let userScore = 0;
let compScore = 0;
let WIN_SCORE = 5;

function prompt(message) {
  console.log(`=> ${message}`);
}

let shorthandToFullName = {
  rk: "rock",
  ss: "scissors",
  pr: "paper",
  ld: "lizard",
  sk: "spock"
};

const winCombo = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};

function win(choice, computerChoice) {
  userScore++;
  prompt(`You chose ${choice} and the computer chose ${computerChoice}.\n You wins! Current score is user: ${userScore} | computer: ${compScore}`);
}

function tie(choice, computerChoice) {
  prompt(`You chose ${choice} and the computer chose ${computerChoice}.\n It's a tie! Current score is user: ${userScore} | computer: ${compScore}`);
}

function lose(choice, computerChoice) {
  compScore++;
  prompt(`You chose ${choice} and the computer chose ${computerChoice}.\n Computer wins! Current score is user: ${userScore} | computer: ${compScore}`);
}

prompt(`Welcome to Rock, Paper, Scissors, Lizard, Spock!`);

prompt(`Can you beat the computer?\n Whoever gets to ${WIN_SCORE} points first wins!`);


while (true) {

  prompt(`Choose one: ${VALID_OPTIONS.join(', ')} \n You can use the first and last letters as answers.\n Ex: rk, pr, ss, ld, sk,`);
  let answer = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(answer)) {
    prompt("That's not a valid choice");
    answer = readline.question().toLowerCase();
  }

  let randomIndex = Math.floor(Math.random() * VALID_OPTIONS.length);
  let computerChoice = VALID_OPTIONS[randomIndex];
  let choice = shorthandToFullName[answer];

  if (winCombo[choice].includes(computerChoice)) {
    win(choice, computerChoice);
  } else if (choice === computerChoice) {
    tie(choice, computerChoice);
  } else {
    lose(choice, computerChoice);
  }

  if (userScore === WIN_SCORE) {
    prompt(`Congratulations! You've beat the computer with the total of ${userScore}!`);
    userScore = 0;
    compScore = 0;
  } else if (compScore === WIN_SCORE) {
    prompt(`Aww, you lost. The computer won with the total of ${compScore}.`);
    userScore = 0;
    compScore = 0;
  }

  prompt('Do you want to play again? (y/n)?');
  let restart = readline.question().toLowerCase();
  while (restart[0] !== 'n' && restart[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    restart = readline.question().toLowerCase();
  }
  if (restart[0] !== 'y') break;
}
