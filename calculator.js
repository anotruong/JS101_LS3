const readline = require('readline-sync');

const messages = require('./calculator_messages.json');

console.log("What language do you want?\n ENG or FRE");
let LANGUAGE = readline-question();

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

/*
prompt(MESSAGES('Language'));
let lang = readline.question();
while (!['ENG', 'FRE'].includes(lang)) {
  console.log('Try again');
  lang = readline.question()
}*/


prompt('welcome');

while (true) {
  prompt('step1');
  	let number1 = readline.question();

  while (invalidNumber(number1)) {
    	prompt('invalidNumber');
    	number1 = readline.question();
  	}

  	prompt('step2');
  	let number2 = readline.question();

  while (invalidNumber(number2)) {
    	prompt('invalidNumber');
    	number2 = readline.question();
  	}

  prompt('operation');
  let operator = readline.question();

  while (!['1', '2', '3', '4'].includes(operator)) {
    prompt('chooseThese');
    operator = readline.question();
  }

  let output;
  switch (operator) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${output}`);

  prompt('restart');
  let restart = readline.question();

  if (restart[0].toLowerCase() !== 'y') break;
};
