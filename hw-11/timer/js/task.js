/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const refs = {
  jsDayFace: document.querySelector('.js-timeface'),
  jsHoursFace: document.querySelector('.js-hoursface'),
  jsMinsFace: document.querySelector('.js-minsface'),
  jsSecsFace: document.querySelector('.js-secsface'),
  btnStart: document.querySelector('.btnStart'),
};

function pad(val) {
  return String(val).padStart(2, '0');
}

function updateClockface(days, hours, mins, secs) {
  refs.jsDayFace.textContent = days;
  refs.jsHoursFace.textContent = hours;
  refs.jsMinsFace.textContent = mins;
  refs.jsSecsFace.textContent = secs;
}

const countdown = () => {
  const intervalId = setInterval(() => {
    const targetDate = new Date(2021, 0, 0);
    const nowDate = new Date();
    const time = targetDate - nowDate;
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    if (time < 0) {
      clearInterval(intervalId);
    } else {
      updateClockface(`${days}`, `${hours}`, `${mins}`, `${secs}`);
    }
  }, 1000);
};

refs.btnStart.addEventListener('click', countdown);
