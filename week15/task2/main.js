// BOM tasks

// example of saving input field value even if after reload
userInput = document.querySelector(".user");

// window.sessionStorage.setItem("username");
if (sessionStorage.getItem("username")) {
    userInput.value = sessionStorage.getItem("username");
}
userInput.onblur = function () {
    if (this.value) window.sessionStorage.setItem("username", this.value);
};
