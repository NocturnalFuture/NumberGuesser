let targetNumber = document.querySelector('.targetNumber');
let targetScoreComputer = document.querySelector('.targetScoreComputer');
let targetScoreUser = document.querySelector('.targetScoreUser');
let userNumberInput = document.querySelector('.userNumberInput');
let incrementButton = document.querySelector('.incrementButton');
let decrementButton = document.querySelector('.decrementButton');
let placeBet = document.querySelector('.placeBet');

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
console.log('Humans bet is:', humanBet);
console.log('Ais bet is:', aiBet);
console.log('Target number is:', targetNum);

const userTargetGuess = Math.abs(humanBet - targetNum)
const computerTargetGuess = Math.abs(aiBet - targetNum)
targetNumber.innerHTML = targetNum;

if(userTargetGuess < computerTargetGuess){
    placeBet.innerHTML =  'User wins'
    targetScoreUser.innerHTML ++;
  } else if(computerTargetGuess < userTargetGuess) {
    placeBet.innerHTML =  'AI wins';
    targetScoreComputer.innerHTML ++;
  } else if(userTargetGuess === computerTargetGuess) {
    placeBet.innerHTML =  'Draw'
  }




})






