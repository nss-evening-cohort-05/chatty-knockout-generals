var ClipChat = (function(oldClipChat) {

    jsonArray = []; //temp holder for json data

    oldClipChat.jsonError = function() {
        console.log("json error");
    },
    oldClipChat.loadJSON = function(filepath) {
        let data = JSON.parse(this.responseText);
        data = data.messages;
        jsonArray.push(data);
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