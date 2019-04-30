const chat = document.getElementById("chatElem");

document.getElementById("chatButton").addEventListener("click", myScript);

function myScript() {
    if (chat.style.display == "none") {
        chat.style.display = "block";
        console.log("Is visible")
    } else {
        chat.style.display = "none";
        console.log("Is not visible")
    }
}