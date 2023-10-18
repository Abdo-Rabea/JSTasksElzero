// BOM tasks

// creating font size selection
let selectSize = document.createElement("select");
selectSize.className = "font-size";
let i = 16;
for (; i <= 30; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    selectSize.append(option);
}
document.body.append(selectSize);

let allSelect = document.querySelectorAll("select");
let selectFamily = allSelect[0];
let selectColor = allSelect[1];
selectSize = allSelect[2];

// getting values from localstroge and check if it exists = initialization of page
let fontFamily = selectFamily.value;
let color = selectColor.value;
let fontSize = selectSize.value;

if (window.localStorage.getItem("font-family")) {
    fontFamily = window.localStorage.getItem("font-family");
    selectFamily.value = fontFamily;
}
if (window.localStorage.getItem("color")) {
    color = window.localStorage.getItem("color");
    selectColor.value = color;
}
if (window.localStorage.getItem("font-size")) {
    fontSize = window.localStorage.getItem("font-size");
    selectSize.value = fontSize;
}

applyStyling(fontFamily, color, fontSize);

// apply event on change
allSelect.forEach((select) => {
    select.addEventListener("change", () => {
        // set to local storage
        window.localStorage.setItem(select.className, select.value);
        // apply to the page
        applyStyling(
            localStorage.getItem("font-family"),
            localStorage.getItem("color"),
            localStorage.getItem("font-size")
        );
    });
});
// apply styling
function applyStyling(fontFamily, color, fontSize) {
    // console.log(fontSize);
    if (fontFamily)
        document.body.style.fontFamily = `${fontFamily}, sans-serif`;
    if (color) document.body.style.color = color;
    if (fontSize) {
        document.body.style.fontSize = `${fontSize}px`;
        console.log(fontSize);
    }
}
