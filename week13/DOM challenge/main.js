// create element
// class
// style
// childs
// body styling
document.body.style.cssText = "margin:0;";
// header
header = document.createElement("header");
header.className = "header";
header.style.cssText =
    "display: flex; justify-content: space-between;padding: 15px;height:20";
// logo
logo = document.createElement("div");
logo.className = "logo";
text = document.createTextNode("Abdo");
logo.appendChild(text);
logo.style.cssText = "color:#238A61;font-weight:bold";

// menu
menu = document.createElement("ul");
menu.style.cssText =
    "list-style: none;padding: 0;margin:0; color:#9D9999; font-size: 15px";
// list
menuElements = ["Home", "About", "Service", "Contact"];
menuElements.forEach(function (e) {
    menuElement = document.createElement("li");
    menuElement.append(e);
    // li styling
    menuElement.style.cssText = "display:inline-block; margin-left:10px";
    menu.appendChild(menuElement);
});

header.append(logo);
header.append(menu);
document.body.append(header);
// end of header

// start content
content = document.createElement("div");
content.className = "content";
content.style.cssText =
    "background-color: #eee; display:grid; grid-template-columns: 1fr 1fr 1fr;grid-gap: 15px 15px;padding:15px;height: calc(100vh - 2 * 60px)";

// products
for (let i = 1; i <= 15; i++) {
    product = document.createElement("product");
    product.className = "product";
    product.style.cssText =
        "background-color: white; color:#9D9999; text-align:center; padding :10px";

    num = document.createElement("span");
    num.append(i);
    num.style.cssText = "font-size:40px; color:black; display:block";

    product.append(num);
    product.append("product");

    content.append(product);
}

document.body.append(content);
// end of content;

// start of footer
footer = document.createElement("footer");
footer.className = "footer";
footer.style.cssText =
    "padding: 15px; text-align: center; background-color: #22A96E; color:white; font-weight: bold";

footer.append("Copyright 2023");
document.body.append(footer);
// end of header
