let request = new XMLHttpRequest();
request.open("GET", "articles.json");
request.send();

console.log(request.responseText); // empty

request.onloadend = function () {
    // task 3
    let mainData = JSON.parse(request.responseText);
    mainData.forEach((element) => {
        element.section = "All";
    });
    console.log(mainData);

    updatedData = JSON.stringify(mainData);
    console.log(updatedData);

    // task 4
    data = document.createElement("div");
    data.id = "data";
    mainData.forEach((e) => {
        article = document.createElement("div");
        h2 = document.createElement("h2");
        p1 = document.createElement("p");
        p2 = document.createElement("p");
        p3 = document.createElement("p");
        h2.innerHTML = `${e.title}`;
        p1.innerHTML = `${e.content}`;
        p2.innerHTML = `Author: ${e.writer}`;
        p3.innerHTML = `Section: ${e.section}`;
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        data.appendChild(article);
    });
    document.body.append(data);
};
