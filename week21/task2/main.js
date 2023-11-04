let request = new XMLHttpRequest();
request.open("GET", "articles.json");
request.send();

console.log(request.responseText);

request.onloadend = function () {
    console.log(request.responseText);
    console.log("Data Loaded");
};
