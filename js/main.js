
function clock() {
  const hoursArrow = document.querySelector('.hours'),
        minutesArrow = document.querySelector('.minutes'),
        secondsArrow = document.querySelector('.seconds'),
        deg = 6;

  setInterval(() => {
    const day = new Date();

    const hours = day.getHours() * 30,
          minutes = day.getMinutes() * deg,
          seconds = day.getSeconds() * deg;

    hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
    minutesArrow.style.transform = `rotateZ(${minutes}deg)`;
    secondsArrow.style.transform = `rotateZ(${seconds}deg)`;
  }, 0);

  
  
}

clock();