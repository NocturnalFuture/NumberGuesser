let targetNumber = document.querySelector('.targetNumber');
let targetScoreComputer = document.querySelector('.targetScoreComputer');
let targetScoreUser = document.querySelector('.targetScoreUser');
let userNumberInput = document.querySelector('.userNumberInput');
let incrementButton = document.querySelector('.incrementButton');
let decrementButton = document.querySelector('.decrementButton');


// Button Handlers
incrementButton.addEventListener('click', () => {
    userNumberInput.innerHTML++;
})

decrementButton.addEventListener('click', () => {
    userNumberInput.innerHTML--;
})



