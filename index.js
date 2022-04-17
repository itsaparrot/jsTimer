// given time in minutes, convert to seconds
var time_minutes = 5;
let time = time_minutes * 60;
$('button').one('click',function setTimerFunction(){
  let timer = setInterval(timeFunction, 1000);
});
function timeFunction() {
  time --;
  let displayMinutes = Math.floor(time/60);
  let displaySeconds = time%60;
  if (displayMinutes < 10){
    displayMinutes = '0'+displayMinutes;
  };
  if (displaySeconds < 10){
    displaySeconds = '0'+displaySeconds;
  };
  $('h1').text(displayMinutes+":"+displaySeconds);
  if (time == 0) {
    clearInterval(timer);
  };
};
