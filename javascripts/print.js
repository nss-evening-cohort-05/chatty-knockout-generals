var ClipChat = (function(oldClipChat){



var messageArray = []

	oldClipChat.addMessage = function (newText){
		messageArray.unshift(newText);
		console.log(messageArray);
	},
	oldClipChat.addJson = function (data){
		for (var i = 0; i < data.length; i++){
			messageArray.push(data[i]);

		}
		ClipChat.printDOM();
	},
	oldClipChat.printDOM = function(){
		var tableString = "";
		for (var x = 0; x < messageArray.length; x++){
			
			tableString += `<tr><td>${messageArray[x].text}</td>`
			tableString += `<td><a id="${messageArray[x].id}" href="#"><img id="x-icon" src="x-icon.png"></a>`
	    	tableString += `</td></tr>`
		}
		messageContainer.innerHTML = tableString;
		console.log(messageArray);
	}



return oldClipChat;


})(ClipChat || {});