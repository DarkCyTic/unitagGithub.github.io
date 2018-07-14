const CountdownDirective = (() => {

    // Set the date we're counting down to
    const countDownDate = new Date("Sep 12, 2018 12:00:00").getTime();

    return {
        init(){
            setInterval(function() {

              // Get todays date and time
              let now = new Date().getTime();

              // Find the distance between now an the count down date
              let distance = countDownDate - now;

              // Time calculations for days, hours, minutes and seconds
              let days = Math.floor(distance / (1000 * 60 * 60 * 24));
              let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              let seconds = Math.floor((distance % (1000 * 60)) / 1000);

              // // Display the result in the element with id="demo"
              // document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
              // + minutes + "m " + seconds + "s ";
              document.getElementById("countdownDays").innerHTML = days + "";
              document.getElementById("countdownHours").innerHTML = hours;
              document.getElementById("countdownMinutes").innerHTML = minutes;
              document.getElementById("countdownSeconds").innerHTML = seconds;

              // If the count down is finished, write some text
              if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
              }
            }, 1000);
        }
    };
})();
