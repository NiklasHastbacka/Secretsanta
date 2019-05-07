const chat = document.getElementById("chatElem");

document.getElementById("chatButton").addEventListener("click", myScript);

function myScript() {
    if (chat.value == 0) {
        chat.classList.add("addChat");
        chat.value = 1
    } else {
        chat.classList.remove("addChat");
        chat.value = 0
    }
}