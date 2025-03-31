document.addEventListener('DOMContentLoaded', function () {
  setInterval(function () {
    if (Pause) { return; }
    const top = Number(Monster.style.top.replace('px', ''));
    const left = Number(Monster.style.left.replace('px', ''));
    const heltenTop = Number(Hero.style.top.replace('px', ''));
    const heltenLeft = Number(Hero.style.left.replace('px', ''));
    const diffTop = heltenTop - top;
    const diffLeft = heltenLeft - left;
    const diff = Math.sqrt(diffTop * diffTop + diffLeft * diffLeft);
    const topSpeed = diffTop / diff * Speed;
    const leftSpeed = diffLeft / diff * Speed;
    const newTop = top + topSpeed;
    const newLeft = left + leftSpeed;
    Monster.style.top = `${newTop}px`;
    Monster.style.left = `${newLeft}px`;

    if (Math.abs(heltenTop - newTop) < 10 && Math.abs(heltenLeft - newLeft) < 10) {
      alert('Game over!');
      Monster.style.top = '0px';
      Monster.style.left = '0px';
      Pause = true;
    }
  }, 100);
});