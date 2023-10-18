myDiv = document.querySelector("div");
myP = document.querySelector("p");
myP.remove();

// create two div
start = document.createElement("div");
start.className = "start";
start.setAttribute("title", "Start Element");
start.setAttribute("data-value", "Start");
start.innerHTML = "start";

end = document.createElement("div");
end.className = "end";
end.setAttribute("title", "End Element");
end.setAttribute("data-value", "End");
end.innerHTML = "End";

myDiv.before(start);
myDiv.after(end);
