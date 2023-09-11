const btnSave = document.querySelector("#btn-save");
const btnModalHeaderClose = document.querySelector(".btn-modal-header-close");
const btnModalFooterSave = document.querySelector(".btn-modal-footer-save");
// console.log(btnModalFooterSave);
const mainModal = document.querySelector(".main-modal");


btnSave.addEventListener("click", openModal);
btnModalHeaderClose.addEventListener("click", closeModal);
btnModalFooterSave.addEventListener("click", saveProduct);
mainModal.addEventListener("click", function (e) {

})


function openModal() {
    mainModal.classList.remove("hidden");
}


function closeModal() {
    btnModalHeaderClose.classList.remove("hidden");
}

function saveProduct() {
//burada kaydetme kodları yer alır
closeModal();
}