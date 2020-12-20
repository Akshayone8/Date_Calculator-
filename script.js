const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secondsEl=document.getElementById('seconds');
const whatsEl=document.getElementById('whatTo');

const whatToCheck=prompt('What do you want to Check');

const getdetails=prompt('enter');

const newYears=getdetails;

function countdown(){
  const newYearDate=new Date(newYears);
  const currentDate=new Date();

  var diff=(newYearDate - currentDate)/1000;

  const days = Math.floor(diff/3600/24);
  const hours = Math.floor(diff/3600)%24;
  const mins = Math.floor(diff/60)%60;
  const seconds = Math.floor(diff)%60;

  daysEl.innerHTML=days;
  hoursEl.innerHTML=timeran(hours);
  minsEl.innerHTML=timeran(mins);
  secondsEl.innerHTML=timeran(seconds);
  whatsEl.innerHTML='Remaing for ' +  whatToCheck ;
}

setInterval(countdown,1000);

function timeran(time){
  return time < 10 ? (`0${time}`):time;
}