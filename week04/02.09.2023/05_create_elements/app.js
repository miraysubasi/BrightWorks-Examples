let taskArray = [
{id: 1, description:"Netflix'i iptal et"},
{id: 2, description: "Pilav yapmayı unutma" },
{id: 3, description: "Su iç" },
{id: 4, description: "Spora git" },
{id: 5, description: "Netflix'i iptal et" }
];

let taskList = document.getElementById("task-list");

// for(let i = 0; i<taskArray.length;i++){
//     console.log(taskArray[i].description )
// }

for(const task of taskArray) {
   let li =`
                      <li class="list-group-item task">

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="${task.id}">
                                <label class="form-check-label" for="${task.id}">Görev1</label>
                            </div>

                        </li> 
   `;
   taskList.insertAdjacentHTML("beforeend", li);
}
