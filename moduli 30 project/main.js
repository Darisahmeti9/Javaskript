var wakeuptime;
var dstime;
var sleeptime;
var noor =12;










function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var secounds = currentTime.getSeconds();

    var meridian = "AM";

    if(hours >= noon){
        meridian = "PM";
    }


}


