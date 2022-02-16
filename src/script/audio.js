const media = document.querySelector('audio');
const controls = document.querySelector('#audio-controls');

const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const rwd = document.querySelector('.rwd');
const fwd = document.querySelector('.fwd');

const timerWrapper = document.querySelector('.timer');
const timer = document.querySelector('.timer span');
const timerBar = document.querySelector('.timer div');

media.removeAttribute('controls');
controls.style.visibility = 'visible';

play.addEventListener('click', playPauseMedia);

function playPauseMedia() {
  if (media.paused) {
    play.setAttribute('data-icon', 'U');
    media.play();
  } else {
    play.setAttribute('data-icon', 'P');
    media.pause();
  }
}
