function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId = ' ';

const isActive = true;

startBtn.addEventListener('click', () => {
  startBtn.setAttribute('disabled', 'true');
  intervalId = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled');
});
