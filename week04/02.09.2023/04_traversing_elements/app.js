let taskList = document.getElementById("task-list");

let sonuc = taskList;
sonuc = taskList.children;
sonuc = taskList.children[2];
sonuc = taskList.firstElementChild;
sonuc = taskList.lastElementChild;

sonuc = documant.getElementById("title");
sonuc = documant.querySelector("#title");
sonuc = sonuc.parentElement.parentElement.parentElement.parentElement;

let task1 = document.querySelector(".task");
sonuc = task1;
sonuc = sonuc.nextElementSibling.nextElementSibling;
sonuc = sonuc.previousElementSibling.nextElementSibling;

sonuc = taskList.children;
sonuc[0].children[0].children[0].checked=true;


console.log(sonuc);