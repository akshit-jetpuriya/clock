$(document).ready(function () {
    // alert("jquery is unning")
    $('#show-alarm').click(function () {
        $('.alarm-container').slideToggle(200)
    })

    //showing alarm set alertbox and auto hiding
    $('#set-alarm').click(function () {
        $('.danger-alert').slideDown(200)
        setTimeout(() => {
            $('.danger-alert').slideUp(200)
        }, 2000);
    })
})

//clock timing
let time = document.getElementById('time');
let alarmTime = document.getElementById('alarm-time');
let day = document.getElementById('day');
setInterval(() => {
    let a = new Date();
    let c_time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    let c_date = a.toLocaleDateString()
    // console.log(c_time)
    time.innerText = c_time;
    day.innerText = c_date;
    alarmTime.innerText = c_time;
    // console.log(c_time)
}, 1000);



//mode switching script
let modeSwitch = document.getElementById('background-control');
let mainContainer = document.getElementsByClassName('main-container')[0]
let alarmCont = document.getElementsByClassName('alarm-container')[0];
let mode = document.getElementsByClassName('mode')[0]
let blackMode = document.getElementsByClassName('dark-mode')[0]
let modeInfo = document.getElementById('mode-info')
let body = document.getElementsByTagName('body')[0]
let button = document.getElementsByTagName('button');
let darkMode = false;
modeSwitch.addEventListener('click', () => {
    if (darkMode != true) {
        mode.classList = "mode mode-switch";
        setTimeout(() => {
            mode.style.float = "right";
            mode.className = "dark-mode";
            mainContainer.classList = "main-container dark-container";
            alarmCont.classList = "alarm-container dark-container";
            body.className = "dark-body"
            modeInfo.innerText = "ON";
            darkMode = true;
            button[1].classList = "stop-song dark-button"
            button[2].classList = "dark-button"
            alarmBox.style.background = "black"
            alarmBox.style.color = "white"
        }, 410);
    } else {
        mode.classList = "dark-mode change-back"
        setTimeout(() => {
            alarmBox.style.background = "white"
            alarmBox.style.color = "black"
            mainContainer.classList = "main-container light-container"
            alarmCont.classList = "alarm-container";
            mode.className = "mode";
            body.className = "light-body"
            modeInfo.innerText = "OFF";
            button[1].classList = "stop-song"
            button[2].classList = ""
            darkMode = false;
        }, 410);
    }
})

//alarm script
let alarmSound = document.createElement('audio');
alarmSound.setAttribute('src', 'sound.mp3')
let setAlarm = document.getElementById('set-alarm');
let alarmHour = document.getElementById('hours');
let alarmMin = document.getElementById('minutes');
let alarmSec = document.getElementById('seconds');
let stopSong = document.getElementsByClassName('stop-song')[0];
let alarmBox = document.getElementById('alarm-tone')
setAlarm.onclick = () => {
    // alert("thanks")
    let hours = alarmHour.value * 120 * 1000;
    let minutes = alarmMin.value * 60 * 1000;
    let seconds = alarmSec.value * 1000;
    // console.log(hours+":"+minutes+":"+seconds);
    let alarmTime = hours + minutes + seconds;
    alarm(alarmTime)
    
}
function alarm(timing){
    setTimeout(() => {
        alarmSound.play()
        alarmBox.style.visibility = "visible"
        stopSong.onclick = ()=>{
            alarmBox.style.visibility = "hidden"
            alarmSound.pause()
        }
    }, timing);
}

//repeat alarm
let repeat = document.getElementById('repeat');
repeat.addEventListener('click',()=>{
    console.log("alaram time")
    alarmSound.pause()
    alarmBox.style.visibility = "hidden"
    let repeatTime = 5*60*1000;
    alarm(repeatTime);
})