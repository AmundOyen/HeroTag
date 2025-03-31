let Board = null;
let TimeElement = null;
let Hero = null;
let Monster = null;
let Monster2 = null;
let Pause = true;
let Speed = 5;
let HeroSpeed = 20;
let Time = 0;

document.addEventListener('DOMContentLoaded', function () {
  Board = document.querySelector('.board');
  TimeElement = document.querySelector('#TimeElement');
  Hero = document.querySelector('.hero');
  Monster = document.querySelector('.monster');
  Monster2 = document.querySelector('.monster2');

  initCharacters();

  setInterval(function () {
    if (Pause) { return; }
    Time = Time + 1;
    TimeElement.textContent = Time;
  }, 1 * 1000);


  setInterval(function () {
    Speed = Speed + 2;
    HeroSpeed = HeroSpeed + 1;
  }, 10 * 1000);
});

document.addEventListener('keydown', function (event) {
  if (event.key === ' ') {
    Pause = !Pause;
  }
});

function initCharacters() {
  Hero.style.top = Board.clientHeight / 2 - Hero.clientHeight / 2 + 'px';
  Hero.style.left = Board.clientWidth / 2 - Hero.clientWidth / 2 + 'px';
  Monster2.style.top = Board.clientHeight - Monster2.clientHeight + 'px';
  Monster2.style.left = Board.clientWidth - Monster2.clientWidth + 'px';
  Monster.style.top = '0px';
  Monster.style.left = '0px';
}