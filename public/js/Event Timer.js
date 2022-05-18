function getValues(){
    let titleName = document.getElementById("timer-title").value;
    document.getElementById("timer-title-here").innerHTML = titleName;
    var day = document.getElementById("first-print").value,
        month = document.getElementById("second-print").value,
        year = document.getElementById("third-print").value;
        hours = document.getElementById("fourth-print").value;
        minutes = document.getElementById("fifth-print").value;
        seconds = document.getElementById("sixth-print").value;
        stopButton = document.getElementById("stop-button");
        stopButton.onclick = function (){
            clearInterval(countDownFunction);
            document.getElementById("timer").innerHTML = "Countdown is Stopped";
        }

    if ((day >= 1 && day <= 31) && (month <= 12 && month >= 1) && (year > 2021)){
        var countDownDate = new Date(month + " " + day + " " + year + " " + hours + ":" + minutes + ":" + seconds).getTime();

        var countDownFunction = setInterval( function (){
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            if (distance < 0){
                clearInterval(countDownFunction);
                document.getElementById("timer").innerHTML = "Countdown is Finished";
            }
        }, 1000);
    }
    else
        document.getElementById("timer").innerHTML = "Please enter a correct date";

}



