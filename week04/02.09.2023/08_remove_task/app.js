let taskList = document.getElementById("task-list");
let btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", addNewTask);

let taskArray = [
    { id: 1, description: "Netflix'i iptal et" },
    { id: 2, description: "Pilav yapmayı unutma" },
    { id: 3, description: "Su iç" },
    { id: 4, description: "Çöpleri at" },
    { id: 5, description: "Dizi izle" }
];

function displayTasks() {
    taskList.innerHTML = "";
    for (const task of taskArray) {
        let li = `
        <li class="list-group-item task d-flex justify-content-between align-items-center">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="${task.id}">
                <label class="form-check-label" for="${task.id}">${task.description} ${task.id}</label>
            </div>
                <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button"
                          data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fa-solid fa-ellipsis"></i>
                      </button>
                      <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#" onclick="removeTask(${task.id})" >Sil</a></li>
                          <li><a class="dropdown-item" href="#">Düzenle</a></li>
                          
                      </ul>
                  </div>
        </li>
    `;
        taskList.insertAdjacentHTML("beforeend", li);
    }
}

function addNewTask() {
    let inputNewTask = document.getElementById("desc-task");

    if (isFull(inputNewTask.value)) {
        let newId = taskArray[taskArray.length - 1].id + 1;
        taskArray.push({ id: newId, description: inputNewTask.value });

        inputNewTask.value = "";
        displayTasks();
    } else {
        alert("lütfen görev açıklamasını boş bırakmayınız!")
    }
    inputNewTask.value = "";
}
function isFull(value) {
    if (value.trim() == "") {
        return false;
    }
    return true;
}
function removeTask(id) {
    let deletedIndex;
    for (let i = 0; i < taskArray.length; i++) {
        if (taskArray[i].id == id) {
            deletedIndex = i;
        }
    }
    let answer = confirm("\"" + taskArray[deletedIndex].description + "\""+ "Silmek istediğinizden emin misiniz?")
    if(answer){
        taskArray.splice(deletedIndex, 1);
        
        displayTasks();
    }


}
displayTasks();

