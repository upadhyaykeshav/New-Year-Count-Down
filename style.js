const din=document.getElementById('days');
const ghanta=document.getElementById('hours');
const minutes=document.getElementById('mins');
const sec=document.getElementById('second');

const newYears='1 January 2023'

function countDown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds=(newYearDate-currentDate)/1000;

    const days= Math.floor(totalSeconds/3600/24);
    const hours= Math.floor(totalSeconds/3600)%24;
    const mins= Math.floor(totalSeconds/60)%60;
    const second= Math.floor(totalSeconds)%60;

    din.innerHTML=days;
    ghanta.innerHTML= formatTimes(hours);
    minutes.innerHTML= formatTimes(mins);
    sec.innerHTML= formatTimes(second);
}
function formatTimes(time){
    return time <  10 ? `0${time}`:time;
}
countDown();
setInterval(countDown,1000);

// -------------Adding Audio file----------------------

let x=document.querySelector('#newYear')
function playAudio(){
    x.play();
}
function pauseAudio(){
    x.pause();
}