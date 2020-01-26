const imageSlides = document.getElementsByClassName('slider__image');
const leftArrow = document.getElementById('slider__left-arrow');
const rightArrow = document.getElementById('slider__right-arrow');

var counter = 0;

let hideImages = () => {
  let i = 0;
  for (; i < imageSlides.length; i += 1) {
    imageSlides[i].classList.remove('slider__visible');
  }
};

let imageLoop = () => {
  let currentImage = imageSlides[counter];
  currentImage.classList.add('slider__visible');
  counter += 1;
};

imageLoop();

let arrowClick = e => {
  let target = e.target;
  if (target === leftArrow) {
    hideImages();
    if (counter === 1) {
      counter = imageSlides.length - 1;
      imageLoop();
    } else {
      counter -= 1;
      counter -= 1;
      imageLoop();
    }
  } else if (target === rightArrow) {
    hideImages();
    if (counter === imageSlides.length) {
      counter = 0;
      imageLoop();
    } else {
      imageLoop();
    }
  }
};

leftArrow.addEventListener('click', arrowClick);
rightArrow.addEventListener('click', arrowClick);
