const container = document.querySelector('.container');
const guesses = document.querySelector('#guesses');
const lastResult = document.querySelector('#lastResult');
const lowOrHi = document.querySelector('#lowOrHi');

const guessSubmit = document.querySelector('#guessSubmit');
const guessField = document.querySelector('#guessField');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
let resetBtn;
guessField.focus();

function checkGuess() {
  const userGuess = Number(guessField.value);

  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }

  guesses.textContent += `${userGuess} `;

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Gip, gip, hurrah!!!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!Game over!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Too low';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Too high';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetBtn = document.createElement('button');
  resetBtn.textContent = 'Start new game';
  resetBtn.style.paddingTop = '1.5em';
  resetBtn.style.paddingBottom = '1em';
  container.append(resetBtn);
  resetBtn.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.results p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetBtn.parentNode.removeChild(resetBtn);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener('click', checkGuess);
