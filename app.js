let targetNumber = document.querySelector('.targetNumber');
let targetScoreComputer = document.querySelector('.targetScoreComputer');
let targetScoreUser = document.querySelector('.targetScoreUser');
let userNumberInput = document.querySelector('.userNumberInput');
let incrementButton = document.querySelector('.incrementButton');
let decrementButton = document.querySelector('.decrementButton');
let placeBet = document.querySelector('.placeBet');
let computerNumberInput = document.querySelector('.computerNumberInput');
let newRound = document.querySelector('.newRound');
let roundNumber = document.querySelector('.roundNumber');


// Button Handlers
incrementButton.addEventListener('click', () => {
    userNumberInput.innerHTML++;
})

decrementButton.addEventListener('click', () => {
    userNumberInput.innerHTML--;
})

// Target Number Generator
const targetNumberGenerator = () => {
    return Math.floor(Math.random()*10);
}

// AI Genertor
const aiGuess = () => {
    return Math.floor(Math.random()*10);
}

// Human Guess
placeBet.addEventListener('click', () => {

    // Players Choice
        let humanBet = userNumberInput.innerHTML;
        let aiBet = aiGuess();
        let targetNum = targetNumberGenerator();


    console.log(`Computer picks: ${aiBet}`)

/*      
console.log('Humans bet is:', humanBet);
console.log('Ais bet is:', aiBet);
console.log('Target number is:', targetNum);
console.log('PlaceHolder Currently Holds', computerTargetNumber)
*/
roundNumber.innerHTML++;

computerNumberInput.innerHTML = aiBet;

const userTargetGuess = Math.abs(targetNum - humanBet)
const computerTargetGuess = Math.abs(targetNum - aiBet)
targetNumber.innerHTML = `<h1>${targetNum}</h1>`;
console.log('Human distance is', userTargetGuess);
console.log('Computer distance is', computerTargetGuess);

if(userTargetGuess < computerTargetGuess){
    placeBet.innerHTML =  '<h1 style="color:#3dd790">User wins</h1>';
    targetScoreUser.innerHTML ++;
  } else if(computerTargetGuess < userTargetGuess) {
    placeBet.innerHTML =  '<h1 style="color:#fe3b77">AI wins</h1>';
    targetScoreComputer.innerHTML ++;
  } else if(userTargetGuess === computerTargetGuess) {
    placeBet.innerHTML =  '<h1>Draw</h1>'
  }
})



newRound.addEventListener('click', () => {
    computerNumberInput.innerHTML = 0;
    userNumberInput.innerHTML = 0;
    targetNumber.innerHTML = '<h1>?</h1>';
    placeBet.innerHTML = '<h1>Fire Off Guess</h1>';
})




