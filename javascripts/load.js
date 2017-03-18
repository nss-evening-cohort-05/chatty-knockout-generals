var ClipChat = (function(oldClipChat) {
	
	jsonArray = []; //temp holder for json data

    oldClipChat.jsonError = function() {
        console.log("json error");
    },
    oldClipChat.loadJSON = function(filepath) {
    	console.log("this", this);
    	let data = JSON.parse(this.responseText);
        console.log("data1", data);
    	data = data.messages;
        console.log("data2", data);
    	jsonArray.push(data);
    	console.log("jsonArray", jsonArray);
        if (jsonArray.length === 5) {
        	jsonArray = jsonArray.reduce(function(final, each) {
        		return final.concat(each);
        	});
        	ClipChat.addJson(jsonArray);
    	}
	},
	oldClipChat.xhrRequest = function(filePath) {
		let xhr = new XMLHttpRequest();
		xhr.addEventListener("load", ClipChat.loadJSON);
		xhr.addEventListener("error", ClipChat.jsonError);
		xhr.open("GET", filePath);
		xhr.send();
	}
        
    return oldClipChat;

})(ClipChat || {});

var jsonPaths = ["javascripts/msg1.json", "javascripts/msg2.json", "javascripts/msg3.json", "javascripts/msg4.json", "javascripts/msg5.json"];
jsonPaths.forEach(i => ClipChat.xhrRequest(i));

// var myRequest = new XMLHttpRequest();
// myRequest.addEventListener("load", ClipChat.loadFile);
// myRequest.addEventListener("error", ClipChat.jsonError);
// myRequest.open("GET", "javascripts/messages.json");
// myRequest.send();

// function xhrRequest(filePath){
// 	let xhr = new XMLHttpRequest();
// 	xhr.addEventListener("load", ClipChat.loadJSON);
// 	xhr.addEventListener("error", ClipChat.jsonError);
// 	xhr.open("GET", filePath);
// 	xhr.send();
// }


