var ClipChat = (function(oldClipChat) {

    oldClipChat.loadFile = function() {
            var data = JSON.parse(this.responseText);
            data = data.messages;
            ClipChat.addJson(data);
        },

        oldClipChat.loadIfFileFails = function() {
            console.log("json error");
        }
        
    return oldClipChat;

})(ClipChat || {});

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", ClipChat.loadFile);
myRequest.addEventListener("error", ClipChat.loadIfFileFails);
myRequest.open("GET", "javascripts/messages.json");
myRequest.send();