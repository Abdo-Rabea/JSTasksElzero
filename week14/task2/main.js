setTimeout(showPopup, 5000);

function showPopup() {
    popup = document.createElement("div");
    popup.className = "popup";
    popup.style.cssText =
        "width: 30%;background-color: #f5f3f4;text-align: center;padding: 20px;position: absolute;top: calc(50% - 67px);left: calc(50% - 212px);border-radius: 5px;";

    welcome = document.createElement("h3");
    welcome.append("Welcome");

    para = document.createElement("p");
    para.append("Welcome to abdo page");

    closeButton = document.createElement("button");
    closeButton.style.cssText =
        "background-color: red;color: white;font-weight: bold;padding: 5px 9px;border-radius: 50%;border: none;position: absolute;top: -10px;right: -10px;cursor:pointer";
    closeButton.append("x");
    popup.append(welcome);
    popup.append(para);
    popup.append(closeButton);
    document.body.append(popup);

    // think of it like saving this in some place or just like event lisnter
    closeButton.onclick = function () {
        popup.remove();
    };
}
