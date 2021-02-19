const finalDate = new Date ("Feb 22, 2021 08:00:00");

timer = function () {
    const current = new Date();
    const diff = finalDate - current;
    const message = document.getElementById('display')
    const theDay = document.querySelector("#days .box")
    const theHour = document.querySelector("#hours .box")
    const theMinutes = document.querySelector("#minutes .box")
    const theSeconds = document.querySelector("#seconds .box")
   
    let days = Math.floor(diff/ (86400000))
    let hours = Math.floor(diff %(1000*60*60*24)/(1000*60*60));
    let minutes = Math.floor((diff % (1000*60*60))/(1000*60));
    let seconds = Math.floor((diff % (1000*60))/1000);
   
    if(diff <= 0){
        message.textContent = "It's Time To Fail";
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }
    
    if(days < 9){
        days = '0' + days
        }
        if(days < 99){
        days = '0' + days
        }
        if(hours < 10){
        hours = '0' + hours
        }
        if(minutes < 10){
        minutes = '0' + minutes
        }
        if(seconds < 10){
        seconds = '0' + seconds 
        }

    
    theDay.textContent= days;
    theHour.textContent= hours;
    theMinutes.textContent= minutes;
    theSeconds.textContent= seconds;
    
}
   
setInterval(timer, 1000)
timer();
