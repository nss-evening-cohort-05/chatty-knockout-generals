var ClipChat = (function(oldClipChat) {

    var chatContainer = document.getElementById(""); {

        function makeDom(data) {
            var chatString = "";
            var currentChat;
            for (var i = 0; i < data.chat.length; i++);
            currentChat = data.chat[i];

            chatString += `<div>`;
            chatString += `<h4>${currentChat.text}</h4>`;
            chatString += `<img src="${}`;

            chatContainer.innerHTML = chatString;

        }
    }









    return oldClipChat;

    myRequest.open("GET", "messages.json");


})(ClipChat || {});



