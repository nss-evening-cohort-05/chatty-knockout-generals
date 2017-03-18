var ClipChat = (function(oldClipChat) {

    var messageArray = [];
    idCounter = 6;

    oldClipChat.addMessage = function(newText) {
        messageArray.unshift(newText);
    },
    oldClipChat.addJson = function(data) {
        for (let i = 0; i < data.length; i++) {
            messageArray.unshift(data[i]);
        }
        ClipChat.printDOM();
    },
    oldClipChat.printDOM = function() {
        var tableString = "";
        if (messageArray.length < 20) {
	        for (var x = 0; x < messageArray.length; x++) {
	            tableString += `<tr><td>${messageArray[x].text}</td>`
	            tableString += `<td><a id="${messageArray[x].id}" href="#"><img class="x-icon" src="x-icon.png"></a>`
	            tableString += `</td></tr>`
	        }
	    } else {
	    	for (var x = 0; x < 20; x++) {
	            tableString += `<tr><td>${messageArray[x].text}</td>`
	            tableString += `<td><a id="${messageArray[x].id}" href="#"><img class="x-icon" src="x-icon.png"></a>`
	            tableString += `</td></tr>`
	        }
	    }
        messageContainer.innerHTML = tableString;
    },
    oldClipChat.deleteMessage = function(messageID){
    	messageID = parseInt(messageID);
    	for (let i = 0; i < messageArray.length; i++) {
    		if (messageArray[i].id === messageID) {
    			messageArray.splice(i, 1);
    		}
    	}
    },
    oldClipChat.clearAll = function(){
    	messageArray = [];
    	userInput.value = "";
    	ClipChat.printDOM();
    }
    oldClipChat.getIdCounter = function(){
    	let currID = idCounter;
    	idCounter++;
    	return currID;
    }

	return oldClipChat;
})(ClipChat || {});