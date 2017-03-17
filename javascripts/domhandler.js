var userInput = document.getElementById("userInput");
var messageContainer = document.getElementById("message-container");
var clearButton = document.getElementById("clearButton");
var darkTheme = document.getElementById("darkTheme");
var largeText = document.getElementById("largeText");

function captureInfo() {
    var newText = {};
    newText.text = userInput.value;
    newText.id = ClipChat.getIdCounter();
    ClipChat.addMessage(newText);
    ClipChat.printDOM();
    userInput.value = "";
}

function deleteDiv(e) {
    if (e.target.className === "x-icon") {
        let deleteTarget = e.target.parentNode.id;
        ClipChat.deleteMessage(deleteTarget);
        ClipChat.printDOM();
    }
}

function enterKey(e) {
    if (e.keyCode === 13) {
        captureInfo();
    }
}

clearButton.addEventListener("click", function(){
    ClipChat.clearAll();
});
userInput.addEventListener("keypress", enterKey);
window.addEventListener("click", deleteDiv);