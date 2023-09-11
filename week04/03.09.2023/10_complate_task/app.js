let taskList = document.getElementById("task-list");
let btnAdd = document.getElementById("btn-add");
let inputNewTask = document.getElementById("desc-task");

let editedId;//O sırada güncellenecek task'in id'si
let isEditMode = false;

btnAdd.addEventListener("click", addNewTask);

let taskArray = [
    { id: 1, description: "Netflixi iptal et", isCompleted: true },
    { id: 2, description: "Pilav yapmayı unutma", isCompleted: false },
    { id: 3, description: "Su iç", isCompleted: true },
    { id: 4, description: "Çöpleri at", isCompleted: false },
    { id: 5, description: "Fenerbahçe maçı izle", isCompleted: true }
];

function displayTasks() {
    taskList.innerHTML = "";
    for (const task of taskArray) {
        let li = `
        <li class="list-group-item task d-flex justify-content-between align-items-center ${task.isCompleted ? 'bg-warning' : ''}">
            <div class="form-check">
                <input onclick="updateStatus(this)" class="form-check-input" type="checkbox" id="${task.id}" ${task.isCompleted ? "checked" : ""}>
                <label class="form-check-label ${task.isCompleted ? 'completed' : ''}" for="${task.id}">${task.description} ${task.id}</label>
            </div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-ellipsis"></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" onclick="removeTask(${task.id})">Sil</a></li>
                    <li><a class="dropdown-item" href="#" onclick="editTask(${task.id},'${task.description}')">Düzenle</a></li>
                </ul>
            </div>
        </li>
    `;
        taskList.insertAdjacentHTML("beforeend", li);
    }
}

function addNewTask(e) {
    e.preventDefault();
    if (!isEditMode) {
        //Yeni kayıt
        if (isFull(inputNewTask.value)) {
            let newId = taskArray[taskArray.length - 1].id + 1;
            taskArray.push({ id: newId, description: inputNewTask.value });
        } else {
            alert("Lütfen görev açıklamasını boş bırakmayınız!");
        }
    } else {
        //Güncelleme
        for (const task of taskArray) {
            if (task.id == editedId) {
                task.description = inputNewTask.value;
                isEditMode = false;
                editedId = null;
                btnAdd.innerText = "Ekle";
                btnAdd.classList.remove("bg-warning");
            }
        }
    }
    displayTasks();
    inputNewTask.value = "";
    inputNewTask.focus();

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
    let answer = confirm("\"" + taskArray[deletedIndex].description + "\"" + " görevini silmek istediğinizden emin misiniz?")
    if (answer) {
        taskArray.splice(deletedIndex, 1);
        displayTasks();
    }
}

function editTask(id, description) {
    editedId = id;
    isEditMode = true;
    inputNewTask.value = description;
    inputNewTask.focus();
    btnAdd.innerText = "Güncelle";
    btnAdd.classList.add("bg-warning");

    //Ödev: Buraya öyle bir kod yazın ki diğer task'lere dokunamayalım. Yani diğer task'lerin olduğu bölüm kullanılamaz olsun.
}

function updateStatus(element) {
    // console.log(element.getAttribute("id"));
    // console.log(element.id);
    for (let task in taskArray) {
        if (task.id == element.getAttribute("id")) {
            task.isCompleted = !task.isCompleted;
        }
    }
    if (element.checked) {
        element.nextElementSibling.classList.add("completed");
        element.parentElement.parentElement.classList.add("bg-warning");
    } else {
        element.nextElementSibling.classList.remove("completed");
        element.parentElement.parentElement.classList.remove("bg-warning");
    }
}

displayTasks();