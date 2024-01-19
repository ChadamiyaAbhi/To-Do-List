let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `<input type="checkbox" onchange="toggleTaskStatus(this)"> ${inputs.value} <i class="fas fa-trash" onclick="removeTask(this)"></i> <i class="fas fa-edit" onclick="editTask(this)"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
    }
}

function removeTask(element) {
    element.parentNode.remove();
}

function editTask(element) {
    let taskText = element.parentNode.childNodes[1];
    let newText = prompt("Edit task:", taskText.textContent.trim());
    if (newText !== null) {
        taskText.textContent = newText;
    }
}

function toggleTaskStatus(checkbox) {
    let taskText = checkbox.nextSibling;
    taskText.classList.toggle("completed");
}
