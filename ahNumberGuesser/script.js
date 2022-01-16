/* ahNumberGuesser, codecademy.com full-stack engineer career path project, ahc 2022 */

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// generate pseudo randoms between 0 and 9
const generateTarget = () => Math.floor(Math.random() * 10 );
// console.log(`generateTarget(): ${generateTarget()}`);

// calculate absolute distance between two numbers
const getAbsoluteDistance = (a = 0, b = 0) => Math.abs(a - b);

// return boolean if human is winner
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    // Alert if input is out of range
    if (humanGuess < 0 || humanGuess > 9) {
        window.alert('Your number ist out of range, it should be between 0 and 9!');
    }
    const humanDiff = getAbsoluteDistance(humanGuess, targetNumber);
    const computerDiff = getAbsoluteDistance(computerGuess, targetNumber);
/*    console.log(`    humanDiff: ${humanDiff}
    computerDiff: ${computerDiff}`); */
    return humanDiff <= computerDiff ? true : false;
};
// console.log(compareGuesses(5,2,3));

// increase score of either human or computer
const updateScore = (winner = '') => winner === 'human' ? humanScore += 1 : computerScore += 1;

// increase the current round number by 1
const advanceRound = () => currentRoundNumber += 1;

