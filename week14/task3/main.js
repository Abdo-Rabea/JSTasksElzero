handler = setInterval(countDown, 500);

div = document.querySelector("div");
function countDown() {
    div.innerHTML -= 1;
    if (div.innerHTML == "0") {
        clearInterval(handler);
    }
}
