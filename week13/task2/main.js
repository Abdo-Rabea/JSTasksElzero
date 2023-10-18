addClassInput = document.querySelector(".add-class");
remClassInput = document.querySelector(".remove-class");
current = document.querySelector("#current");
res = document.querySelector(".class-list");

addClassInput.onblur = function () {
    strClasses = addClassInput.value;
    arrClasses = strClasses.split(" ");
    current.classList.add(...arrClasses);
    addClassInput.value = "";
    updateResult();
};

remClassInput.onblur = function () {
    strClasses = remClassInput.value;
    arrClasses = strClasses.split(" ");
    current.classList.remove(...arrClasses);
    remClassInput.value = "";
    updateResult();
};
console.log(current.classList);

function updateResult() {
    if (current.classList.value == "") res.innerHTML = "No Classes To Show";
    else {
        res.innerHTML = "";
        current.classList.forEach((element) => {
            c = document.createElement("span");
            c.append(element);
            res.append(c);
        });
    }
}
