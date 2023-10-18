// BOM challenge
// local storage structure size = 0 for id = size+1;
// id - vlue

let newTask = document.querySelector(".new-task");
let submit = document.querySelector("input[type=submit]");
let tasksParent = document.querySelector(".tasks");

// number of values
let size;
if (!(size = localStorage.getItem("size"))) {
    resetSize();
}

// show All stored tasks
for (let i = 1; i <= size; i++) {
    if ((value = localStorage.getItem(i))) {
        showTask(i, value);
    }
}

// add
submit.onclick = function () {
    // get input value
    taskValue = newTask.value;
    newTask.value = "";
    if (taskValue) {
        // store in local storage
        window.localStorage.setItem(++size, taskValue);
        window.localStorage.setItem("size", size);
        showTask(size, taskValue);
    }
};

// delete
tasksParent.onclick = function (e) {
    d = e.target;
    if (d.className == "delete") {
        // delte from local storage
        window.localStorage.removeItem(d.parentElement.id);

        // unshow it
        d.parentElement.remove();

        // reset size
        if (localStorage.length == 1) resetSize();
    }
};

// wrong because it doesn't update the deletes after adding task because you arleady selected it
// you can simply update the deletes object every time you add task
// deletes.forEach((d) => {
//     d.onclick = function () {
//         console.log(d.parentElement.id);
//         // delte from local storage
//         window.localStorage.removeItem(d.parentElement.id);

//         // unshow it
//         d.parentElement.remove();
//     };
// });

// add task into tasks div
function showTask(id, taskValue) {
    task = document.createElement("div");
    task.className = "task";
    task.setAttribute("id", id);

    // text
    taskText = document.createElement("div");
    taskText.className = "task-text";
    taskText.innerHTML = taskValue;

    // button
    button = document.createElement("button");
    button.className = "delete";
    button.innerHTML = "delete";

    task.append(taskText);
    task.append(button);
    tasksParent.append(task);
}

function resetSize() {
    localStorage.setItem("size", 0);
    size = 0;
}
