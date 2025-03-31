document.addEventListener('DOMContentLoaded', function () {
  setInterval(function () {
    if (Pause) { return; }
    const top = Number(Monster2.style.top.replace('px', ''));
    const left = Number(Monster2.style.left.replace('px', ''));
    const heltenTop = Number(Hero.style.top.replace('px', ''));
    const heltenLeft = Number(Hero.style.left.replace('px', ''));
    const diffTop = heltenTop - top;
    const diffLeft = heltenLeft - left;
    const diff = Math.sqrt(diffTop * diffTop + diffLeft * diffLeft);
    const topSpeed = diffTop / diff * Speed;
    const leftSpeed = diffLeft / diff * Speed;
    const newTop = top + topSpeed;
    const newLeft = left + leftSpeed;
    Monster2.style.top = `${newTop}px`;
    Monster2.style.left = `${newLeft}px`;

    if (Math.abs(heltenTop - newTop) < 10 && Math.abs(heltenLeft - newLeft) < 10) {
      alert('Game over!');
      initCharacters();
      Pause = true;
    }
  }, 100);
});