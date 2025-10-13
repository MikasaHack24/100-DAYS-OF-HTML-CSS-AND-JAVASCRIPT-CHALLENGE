function updateClock(){

    const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();


const hourDeg = (hour % 12) * 30 + (minute / 60) * 30;
const minuteDeg = minute * 6 + (second / 60) * 6;
const secondDeg = second * 6;


document.querySelector('.hour-hand').style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
  document.querySelector('.minute-hand').style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
  document.querySelector('.second-hand').style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;


}

setInterval(updateClock, 1000);
updateClock();



