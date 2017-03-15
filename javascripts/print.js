var ClipChat = (function(oldClipChat){

var messageText = []
var messageInput = "";

oldClipChat.captureInput = function() {
	console.log("It's linked");
	// messageInput = document.getElementById('message-text').value;
	// console.log("messageInput", messageInput);
	// messageText.push(messageInput);
	// console.log("messageText", messageText); 
}

return oldClipChat;


})(ClipChat || {});