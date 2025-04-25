const startButton = document.getElementById("startButton");
const exitButton = document.getElementById("exitButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
const mainPanel = document.getElementById("mainPanel");
const starePanel = document.getElementById("starePanel");
const timerDisplay = document.getElementById("timer");
const messageBox = document.getElementById("messageBox");

let timer = 0;
let interval;
let messageInterval;

const abusiveMessages = [
    "Fuck off", "Just stop already", "Damn it", "Still staring? Get a life.",
    "Oh my god. STOP.", "Do I look like a zoo animal?", "Buddy, I’m just a potato.",
    "Why are you like this?", "This is why you don't have a girlfriend!! LoL.", "I will mash myself, I swear."
];

// Start the timer and transition to staring panel
startButton.addEventListener("click", function () {
    mainPanel.style.display = "none";
    starePanel.style.display = "block";
    startTimer();
    showAbusiveMessage();
});

// Stop staring and return to main panel
stopButton.addEventListener("click", function () {
    clearInterval(interval);
    clearInterval(messageInterval);
    mainPanel.style.display = "block";
    starePanel.style.display = "none";
});

// Reset the timer
resetButton.addEventListener("click", function () {
    timer = 0;
    timerDisplay.textContent = "00:00";
});

// Exit the app
exitButton.addEventListener("click", function () {
    window.close();
});

// Timer function
function startTimer() {
    interval = setInterval(function () {
        timer++;
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
}

// Show abusive message every 2 minutes
function showAbusiveMessage() {
    messageInterval = setInterval(function () {
        const randomMessage = abusiveMessages[Math.floor(Math.random() * abusiveMessages.length)];
        messageBox.textContent = randomMessage;
        messageBox.style.display = "block";

        setTimeout(function () {
            messageBox.style.display = "none";
        }, 4000);
    }, 120000); // Show every 2 minutes
}
