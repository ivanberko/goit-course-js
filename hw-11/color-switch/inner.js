const colors = [
  '#0f9b0f',
  '#FFD200',
  '#fffc00',
  '#FF9800',
  '#009688',
  '#795548',
  '#f12711',
  '#59C173',
  '#a17fe0',
  '#5D26C1',
  '#cc5333',
  '#23074d',
  '#D3CCE3',
  '#E9E4F0',
  '#b21f1f',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
let isActive = false;
let timerId;

const randomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function start() {
  if (isActive) {
    return;
  }
  isActive = true;
  timerId = setInterval(() => {
    const bgc = colors[randomIntegerFromInterval(0, colors.length - 1)];
    document.body.style.backgroundColor = bgc;
  }, 1000);
}

function stop() {
  clearInterval(timerId);
  isActive = false;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
