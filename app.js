import counterUp from './node_modules/counterup2/index.js';

// Variables
let targetNumber = document.getElementById('targetNumber');
let userInputDisplay = document.getElementById('userInputDisplay');
const incrementButton = document.querySelector('.incrementButton');
const decrementButton = document.querySelector('.decrementButton');
const guessButton = document.querySelector('.guessButton');
let computerPick = document.querySelector('.computerPick');
let computerScoreCount =  document.querySelector('.computerScoreCount');
let computerEmoji = document.querySelector('.computerEmoji');
const nextRoundButton = document.querySelector('.nextRoundButton');
let roundNumber = document.querySelector('.roundNumber');
const userScoreCount = document.querySelector('.userScoreCount');
// Generate Target Number
const randomTargetNumber = () => {
    return Math.floor(Math.random()*10)
}

// Generate Random Number
const randomNumberGenerator = () => {
    return Math.floor(Math.random()*10);
}


// Button Handle Logic
incrementButton.addEventListener('click', () => {
    userInputDisplay.textContent++;
    if(userInputDisplay.textContent >= 10 ){
        userInputDisplay.textContent = 10;
    }

})

decrementButton.addEventListener('click', () => {
    userInputDisplay.textContent--;
    if(userInputDisplay.textContent  <= 0 ){
        userInputDisplay.textContent = 0;
    }
})

// Main Event Handler

guessButton.addEventListener('click', () => {
// Players Choices

let aiGuess =  randomNumberGenerator();
let numberTarget = randomTargetNumber();
let userGuess = userInputDisplay.textContent;

 // Displaying Numbers
 targetNumber.textContent = numberTarget;
 computerPick.textContent = aiGuess;

 counterUp( computerPick, {
    duration: 1000,
    delay: 16,
} )

//Result Logic
const userTargetGuess = Math.abs(numberTarget - userGuess)
const computerTargetGuess = Math.abs(numberTarget - aiGuess)

setTimeout(function(){
if(userTargetGuess < computerTargetGuess){
    guessButton.innerHTML =  "<h1 style=color:white>User wins</h1>";
    userScoreCount.textContent++;
  } else if(computerTargetGuess < userTargetGuess) {
    guessButton.innerHTML =  '<h1 style=color:white>AI wins</h1>';
    computerScoreCount.innerHTML ++;
    computerEmoji.textContent = "🤖"
  } else if(userTargetGuess === computerTargetGuess) {
    guessButton.innerHTML  = "<h1 style=color:white>Draw</h1>";
  }
},1800);

})


// New Round Logic
nextRoundButton.addEventListener('click', ()=> {
    computerPick.textContent = 0;
    userInputDisplay.textContent = 0;
    computerEmoji.textContent = ""
    guessButton.innerHTML="<h1>Guess</h1>"
    roundNumber.textContent++;
    targetNumber.textContent = "?"
})


// Cursos Modification
var cursor = $(".cursor"),
                         follower = $(".cursor-follower");

                     var posX = 0,
                         posY = 0,
                         mouseX = 0,
                         mouseY = 0;

                     TweenMax.to({}, 0.016, {
                         repeat: -1,
                         onRepeat: function() {
                             posX += (mouseX - posX) / 9;
                             posY += (mouseY - posY) / 9;

                             TweenMax.set(follower, {
                                 css: {
                                     left: posX - 20,
                                     top: posY - 20
                                 }
                             });

                             TweenMax.set(cursor, {
                                 css: {
                                     left: mouseX,
                                     top: mouseY
                                 }
                             });
                         }
                     });

                     $(document).on("mousemove", function(e) {
                         mouseX = e.pageX;
                         mouseY = e.pageY;
                     });

                     $(".portfolio-item img").on("mouseenter", function() {
                         cursor.addClass("active");
                         follower.addClass("active");
                     });

                     $(".portfolio-item img").on("mouseleave", function() {
                         cursor.removeClass("active");
                         follower.removeClass("active");
                     });

                 