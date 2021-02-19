const finalDate = new Date ("Feb 22, 2021 08:00:00");

timer = function () {
    const now = new Date();
    const diff = finalDate - now;
    const message = document.getElementById('display')

    if(diff <= 0){
        message.textContent = "You Made It";
    }


    let days = Math.floor(diff/ (86400000))
    let hours = Math.floor(diff %(1000*60*60*24)/(1000*60*60));
    let minutes = Math.floor((diff % (1000*60*60))/(1000*60));
    let seconds = Math.floor((diff % (1000*60))/1000);
    
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

    document.querySelector("#days .box").textContent= days;
    document.querySelector("#hours .box").textContent= hours;
    document.querySelector("#minutes .box").textContent= minutes;
    document.querySelector("#seconds .box").textContent= seconds;

    
}

setInterval(timer, 1000)
timer();
