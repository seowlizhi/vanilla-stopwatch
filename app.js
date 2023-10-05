// get elements button
start_button = document.getElementById("start-button");
stop_button = document.getElementById("stop-button");
reset_button = document.getElementById("reset-button");


// get timer elements
hour_element = document.getElementById("hours");
minute_element = document.getElementById("minutes");
second_element = document.getElementById("seconds");
milliseconds_element = document.getElementById("milliseconds");


// set base timer
hour_element.innerHTML = "00";
minute_element.innerHTML = "00";
second_element.innerHTML = "00";
milliseconds_element.innerHTML = "0000";

var timer = 0;
var intervalid;


// listen to each button
start_button.addEventListener("click", function(){
    intervalid = setInterval(function(){
        timer+=10;            // found out that there will be delay if is 10s below (https://stackoverflow.com/questions/40752982/setinterval-at-1ms-doesnt-seem-to-actually-be-1ms)

        // Calculate the hours, minutes, seconds, and milliseconds elapsed.
        var hours = Math.floor(timer/(1000*60*60))
        var minutes = Math.floor(timer/(1000*60));
        var seconds = Math.floor(timer/1000);
        var milliseconds = timer % 1000;

        // Update the timer display.
        hour_element.innerHTML = hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        minute_element.innerHTML = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        second_element.innerHTML = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        milliseconds_element.innerHTML = milliseconds.toLocaleString('en-US', {minimumIntegerDigits: 4, useGrouping:false});;
    }, 10)
})

stop_button.addEventListener("click", function(){
    // Stop the stopwatch timer.
    timer = 0;
    clearInterval(intervalid);
})


reset_button.addEventListener("click", function(){
    timer = 0;

    // update timer elements back to 00:00:00:00
    hour_element.innerHTML = "00";
    minute_element.innerHTML = "00";
    second_element.innerHTML = "00";
    milliseconds_element.innerHTML = "0000";
    clearInterval(intervalid);
})
