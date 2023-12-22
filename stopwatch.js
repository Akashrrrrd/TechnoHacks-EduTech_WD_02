let stopwatch;
let isRunning = false;
let lapCounter = 1;
let microseconds = 0;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        stopwatch = setInterval(updateDisplay, 100); 
        document.getElementById("startBtn").innerText = "Pause";
    } else {
        isRunning = false;
        clearInterval(stopwatch);
        document.getElementById("startBtn").innerText = "Resume";
    }
}

function updateDisplay() {
    microseconds += 100;

    let display = document.querySelector(".display");
    let centiseconds = Math.floor(microseconds / 10);
    let seconds = Math.floor(centiseconds / 100);
    let minutes = Math.floor(seconds / 60);

    centiseconds %= 100;
    seconds %= 60;
    minutes %= 60;

    display.innerHTML = formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(centiseconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function recordLap() {
    if (isRunning) {
        let lapTime = document.querySelector(".display").innerHTML;
        let lapList = document.getElementById("lapList");
        let listItem = document.createElement("li");
        listItem.className = "lap-item";
        listItem.innerText = "Lap " + lapCounter + ": " + lapTime;
        lapList.appendChild(listItem);
        lapCounter++;
    }
}

function resetStopwatch() {
    clearInterval(stopwatch);
    isRunning = false;
    lapCounter = 1;
    microseconds = 0;
    document.querySelector(".display").innerHTML = "00:00:00";
    document.getElementById("startBtn").innerText = "Start";
    document.getElementById("lapList").innerHTML = "";
}
