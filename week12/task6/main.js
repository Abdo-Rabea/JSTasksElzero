numberInput = document.getElementsByName("elements")[0];
textInput = document.getElementsByName("texts")[0];
selectInput = document.getElementsByName("type")[0];
result = document.getElementsByClassName("results")[0];
document.forms[0].onsubmit = function (e) {
    e.preventDefault();
    result.innerHTML = "";
    let n = +numberInput.value,
        text = textInput.value,
        elementType = selectInput.value;

    for (i = 1; i <= n; i++) {
        childElement = document.createElement(elementType);
        textNode = document.createTextNode(text);
        // add attributes
        childElement.className = "box";
        childElement.title = "Element";
        childElement.id = `id-${i}`;
        // add text
        childElement.appendChild(textNode);
        result.appendChild(childElement);
    }
};
