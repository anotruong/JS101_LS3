//Style wise: I want it to show cents. percentage should be whole numbers.
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=>${message}`);
}

function currency(cash) {
  let number = cash.toFixed(2)
  console.log(new Intl.NumberFormat().format(number));
}

prompt("Welcome to the Loan Calculator!\n Ready to figure out your payment plan?");

// p intial loan amount
prompt("What is your principal amount?");
let loanAmount = readline.question();
let principal = Number(loanAmount);

// intial loan duration, from this you need to get this in months.
prompt("What is the loan duration in years? \n Use whole numbers.");
let loanYears = readline.question();
//divide the answer into 12 months.
let loanedYearsN = Number(loanYears);
let loanedMonths = loanedYearsN * 12;

// annual interest rate, from this you need to get the monthly interest rate.
prompt("What is the APR?");
let aPR = readline.question();
//divide this answer into 12 months
let monthlyInterest = Number(aPR / 100) / 12;

// A = loanAmountN * (Math.pow((1 + (aPR / n), (n*loanedYears))) - loanAmountN
// I =  A - P
// P = principal amount/ loanAmountN
// N =  compounded units
// T =  loaned years
// Interest rate = monthly interest rate

const monthlyPayment = principal * (monthlyInterest / (1 - Math.pow((1 + monthlyInterest), (-loanedMonths))));
const interest = monthlyPayment * loanedMonths - principal;
const total = monthlyPayment * loanedMonths;

prompt(`Your monthly payment is ${currency(monthlyPayment)}.\n The total interest is ${currency(interest)}.\n Your total is ${currency(total)}.`);

