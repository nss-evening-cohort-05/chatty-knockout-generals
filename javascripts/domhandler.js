var userInput = document.getElementById("userInput");
var messageContainer = document.getElementById("message-container");
var clearButton = document.getElementById("clearButton");
var darkTheme = document.getElementById("darkTheme");
var largeText = document.getElementById("largeText");

counter = 6;

function captureInfo() {
    var newText = {}

    newText.text = userInput.value;
    newText.id = counter;
    counter++;
    ClipChat.addMessage(newText);
    ClipChat.printDOM();
    userInput.value = "";
}

function deleteDiv(e) {
    if (e.target.id === "x-icon") {
        // ClipChat.deleteMessage();
    }
}

function enterKey(e) {
    if (e.keyCode === 13) {
        captureInfo();
    }
}

userInput.addEventListener("keypress", enterKey);
window.addEventListener("click", deleteDiv);