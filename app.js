const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const hourEle = document.querySelector('.hour-box')
const minuteEle = document.querySelector('.minute-box')
const secondEle = document.querySelector('.second-box')
const amEle = document.querySelector('.am-box')
setInterval(setClock, 1000);
function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() /  60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
//   console.log(secondsRatio, minutesRatio, hoursRatio)
  let second = currentDate.getSeconds();
  let minute = currentDate.getMinutes();
  let hour = currentDate.getHours();
  if (second < 10) second = '0'+ second;
  if (minute < 10) minute = '0'+ minute;
  if (hour < 10) second = '0'+ hour;
  let am = "AM";
  if (hour > 12)  am = "PM";
  hour = hour > 12 ? hour - 12 : hour;
  setDigitalTime(hourEle, hour);
  setDigitalTime(minuteEle, minute);
  setDigitalTime(secondEle, second);
  setDigitalTime(amEle, am);
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

function setDigitalTime(element, time) {
    element.innerText = time;
}

setClock()