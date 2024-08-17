const sliderImages = Array.from(document.querySelectorAll(".slider__item"));

let sliderInterval = window.setInterval(changeSlideCallback, 5000);

function changeSlideCallback() {
  let activeSlide = document.querySelector(".active-slide");
  let activeSlideIndex = sliderImages.indexOf(activeSlide);

  sliderImages.forEach((slide) => {
    slide.classList.remove("active-slide");
  });

  activeSlideIndex >= sliderImages.length - 1
    ? (activeSlideIndex = 0)
    : activeSlideIndex++;

  sliderImages[activeSlideIndex].classList.add("active-slide");
}
