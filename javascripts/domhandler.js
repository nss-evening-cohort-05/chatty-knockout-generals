var userInput = document.getElementById("userInput");
var messageContainer = document.getElementById("message-container");
var clearButton = document.getElementById("clearButton");
var darkTheme = document.getElementById("darkTheme");
var largeText = document.getElementById("largeText");

counter = 6;

function captureInfo(){
	var newText = {}

	newText.text = userInput.value;
	newText.id = counter;
	counter++;
	// console.log(newText);
	// console.log(counter);
	ClipChat.addMessage(newText);
	ClipChat.printDOM();
}

function enterKey (e){
	if (e.keyCode === 13) {
		// console.log("enter key works");
		captureInfo();
	}
}

userInput.addEventListener("keypress", enterKey);