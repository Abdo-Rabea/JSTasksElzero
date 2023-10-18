myInput = document.querySelector("input");
output = document.querySelector("div");
myInput.oninput = function () {
    output.innerHTML = `{${myInput.value}} USD Dollar = {${(
        myInput.value * 15.6
    ).toFixed(2)}} Egyptian Pound`;
};
