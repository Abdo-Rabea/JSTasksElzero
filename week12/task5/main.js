imgs = document.querySelectorAll("img");
imgs.forEach((element) => {
    if (element.hasAttribute("alt")) element.alt = "Old";
    else element.alt = "Elzero New";
});
