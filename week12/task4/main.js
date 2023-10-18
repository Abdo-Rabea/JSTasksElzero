let div1 = document.body.firstElementChild;
let div2 = document.querySelector("[class='two']");

let temp = div1.title;
div1.title = div2.title;
div2.title = temp;

temp = div1.innerHTML;
div1.innerHTML = div2.innerHTML;
div2.innerHTML = temp + " " + document.getElementsByTagName("div").length;
console.log(div1);
console.log(div2);
