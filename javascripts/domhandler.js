var userInput = document.getElementById("userInput");
var messageContainer = document.getElementById("message-container");
var clearButton = document.getElementById("clearButton");
var darkTheme = document.getElementById("darkTheme");
var largeText = document.getElementById("largeText");
var body = document.getElementsByTagName("body");
var table = document.getElementById("table");

function captureInfo() {
    var newText = {};
    newText.text = userInput.value;
    newText.id = ClipChat.getIdCounter();
    ClipChat.addMessage(newText);
    ClipChat.printDOM();
    userInput.value = "";
    clearButton.removeAttribute("disabled");
}

function deleteDiv(e) {
    if (e.target.className === "x-icon") {
        let deleteTarget = e.target.parentNode.id;
        ClipChat.deleteMessage(deleteTarget);
        ClipChat.printDOM();
    }
}

function enterKey(e) {
    if (e.keyCode === 13 && userInput.value !== "") {
        captureInfo();
    }
}

function invertColors() {
    body[0].classList.toggle("inverse");
    table.classList.toggle("inverse");
}

function biggerText() {
    table.classList.toggle("bigLetters");
}

largeText.addEventListener("change", biggerText);
darkTheme.addEventListener("change", invertColors);
clearButton.addEventListener("click", function(){
    ClipChat.clearAll();
});
userInput.addEventListener("keypress", enterKey);
window.addEventListener("click", deleteDiv);