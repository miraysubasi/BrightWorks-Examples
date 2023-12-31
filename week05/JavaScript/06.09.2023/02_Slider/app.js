const slides = document.querySelectorAll(".slide");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

let autoSlider = true;
let intervalTime = 3000;
let sliderInterval;

btnPrev.addEventListener("click", function () {
    prevSlide();
    againInterval();
});
btnNext.addEventListener("click", function () {
    nextSlide();
    againInterval();
});

function prevSlide() {
    let activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");
    //Eğer activeSlide.previousElementSibling null değilse
    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add("active");
    } else {
        slides[slides.length - 1].classList.add("active");
    }
}

function nextSlide() {
    let activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");
    if (activeSlide.nextElementSibling && activeSlide.nextElementSibling.classList.contains("slide")) {
        activeSlide.nextElementSibling.classList.add("active");
    } else {
        slides[0].classList.add("active");
    }
}

function againInterval() {
    if (autoSlider) {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, intervalTime);
    }
}

againInterval();

//İsteğe bağlı ödev: Başlığın altına slide süresini gösterin.
//İpucu: başka bir interval daha kullanabilirsiniz.