let taskList = document.getElementById("task-list");
let btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", addNewTask);

let taskArray = [
    { id: 1, description: "Netflix'i iptal et" },
    { id: 2, description: "Pilav yapmayı unutma" },
    { id: 3, description: "Su iç" },
    { id: 4, description: "Çöpleri at" },
    { id: 5, description: "Fenerbahçe maçı izle" }
];

function displayTasks() {
    for (const task of taskArray) {
        let li = `
        <li class="list-group-item task">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="${task.id}">
                <label class="form-check-label" for="${task.id}">${task.description} ${task.id}</label>
            </div>
        </li>
    `;
        taskList.insertAdjacentHTML("beforeend", li);
    }
}

function addNewTask() {
    let inputNewTask = document.getElementById("desc-task");
    
    if(isFull(inputNewTask.value)){
        let newId = taskArray[taskArray.length - 1].id + 1;
        taskArray.push({ id: newId, description: inputNewTask.value });
        taskList.innerHTML = "";
        inputNewTask.value = "";
        displayTasks();
    }else{
        alert("lütfen görev açıklamasını boş bırakmayınız!")
    }
    inputNewTask.value ="";
}
function isFull(value) {
    if (value.trim() == "") {
        return false;
    } 
    return true;
}
displayTasks();

