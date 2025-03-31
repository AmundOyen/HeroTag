document.addEventListener('keydown', function (event) {
  if (Pause) { return; }
  if (event.key === 'ArrowUp') {
    moveUp();
  } else if (event.key === 'ArrowDown') {
    moveDown();
  } else if (event.key === 'ArrowLeft') {
    moveLeft();
  } else if (event.key === 'ArrowRight') {
    moveRight();
  }
});

function moveUp() {
  var top = Number(Hero.style.top.replace('px', ''));
  if (top <= 0) { return; }
  Hero.style.top = `${top - HeroSpeed}px`;
}

function moveDown() {
  var top = Number(Hero.style.top.replace('px', ''));
  if (top + Hero.clientHeight + 5 >= Board.clientHeight) { return; }
  Hero.style.top = `${top + HeroSpeed}px`;
}

function moveLeft() {
  var left = Number(Hero.style.left.replace('px', ''));
  if (left <= 0) { return; }
  Hero.style.left = `${left - HeroSpeed}px`;
}

function moveRight() {
  var left = Number(Hero.style.left.replace('px', ''));
  if (left + Hero.clientWidth >= Board.clientWidth) { return; }
  Hero.style.left = `${left + HeroSpeed}px`;
}