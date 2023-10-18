myElement = document.querySelector("div");
myElement = document.querySelector("[id = 'elzero']");
myElement = document.querySelector("[class = 'element']");
myElement = document.querySelector("[name = 'js']");
myElement = document.querySelector(".element"); // doesn't count

myElement = document.querySelectorAll("div")[0];
myElement = document.querySelectorAll("[id = 'elzero']")[0];
myElement = document.querySelectorAll("[class = 'element']")[0];
myElement = document.querySelectorAll("[name = 'js']")[0];

myElement = document.getElementById("elzero");
myElement = document.getElementsByClassName("element")[0];
myElement = document.getElementsByName("js")[0];
myElement = document.getElementsByTagName("div")[0];

myElement = document.body.children[0];
myElement = document.body.childNodes[1];
myElement = document.body.firstChild; // div if you close Prettier
myElement = document.body.firstElementChild;

console.log(myElement);
