function getCountdown() {
  setInterval(() => {
    const targetDate = new Date(2020, 1, 29);
    const nowDate = new Date();
    const time = targetDate - nowDate;
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((time % (1000 * 60)) / 1000);

    if (days < 10) days = `0${days}`;
    if (hours < 10) hours = `0${hours}`;
    if (mins < 10) mins = `0${mins}`;
    if (secs < 10) secs = `0${secs}`;

    if (time < 0) {
      clearInterval(getCountdown);
      console.log('Time is over!');
    } else {
      console.log(
        `Days: ${days} Hours: ${hours} Minuts: ${mins} Seconds: ${secs}`,
      );
    }
  }, 1000);
}

getCountdown();
