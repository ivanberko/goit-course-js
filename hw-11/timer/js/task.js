/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const refs = {
  jsDayFace: document.querySelector('.js-timeface'),
  jsHoursFace: document.querySelector('.js-hoursface'),
  jsMinsFace: document.querySelector('.js-minsface'),
  jsSecsFace: document.querySelector('.js-secsface'),
};

const countdown = () => {
  const intervalId = setInterval(() => {
    const targetDate = new Date(2020, 1, 29);
    const nowDate = new Date();
    const deltaTime = targetDate - nowDate;
    const time = new Date(deltaTime);
    const days = pad(time.getDate());
    const hours = pad(time.getHours());
    const mins = pad(time.getMinutes());
    const secs = pad(time.getSeconds());

    if (time < 0) {
      clearInterval(intervalId);
      console.log('Time is over!');
    } else {
      updateClockface(`${days}`, `${hours}`, `${mins}`, `${secs}`);
    }
  }, 1000);
};

// countdown();

function pad(val) {
  return String(val).padStart(2, '0');
}

function updateClockface(days, hours, mins, secs) {
  refs.jsDayFace.textContent = days;
  refs.jsHoursFace.textContent = hours;
  refs.jsMinsFace.textContent = mins;
  refs.jsSecsFace.textContent = secs;
}
