var ClipChat = (function(oldClipChat) {


	function loadFile() {

        var data = JSON.parse(this.responseText);
        makeDom(data);
    }

    function loadIfFileFails() {


    }

    var myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", loadFile);
    myRequest.addEventListener("error", loadIfFileFails);
    myRequest.open("GET", "messages.json");
    myRequest.send();

    return oldClipChat;


})(ClipChat || {});