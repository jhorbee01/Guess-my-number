'use strict';

let secreteNUmber = Math.trunc(Math.random() * 20) + 1;

const displayMessgae = function (message) {
  document.querySelector('.message').textContent = message;
};
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When No input
  if (!guess) {
    displayMessgae('⛔⚠ No secreteNUmber');
  } //When player wins
  else if (guess === secreteNUmber) {
    // document.querySelector('.message').textContent = '🏆🎉 Correct number';
    displayMessgae('🏆🎉 Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secreteNUmber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } // When guess is too high
  else if (score > 1 && guess > secreteNUmber) {
    displayMessgae('Too High📈');
    score--;
    document.querySelector('.score').textContent = score;
  } // guess is too low
  else if (score > 1 && guess < secreteNUmber) {
    displayMessgae('Too low 📉');
    score--;
    document.querySelector('.score').textContent = score;
  } //When game is lost
  else {
    displayMessgae('You lost the game');
    document.querySelector('.score').textContent = 0;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNUmber = Math.trunc(Math.random() * 20) + 1;
  displayMessgae('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
