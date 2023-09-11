const slides = document.querySelectorAll(".slide");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

const autoSlider = true;
const intervalTime = 3000;
const sliderInterval;

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
    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add("active");
    } else {
        // console.log(slides.length-1)
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

// setInterval(() => {
//     console.log("selam")
// }, 3000);//fuction ve süre milisaniye cinsinden
function againInterval() {
    if (autoSlider) {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, intervalTime);
    }

}
againInterval();
//başlığın altına slide süresini göster baska bir interval kullanabiliriz counterInterval diyebiliriz.