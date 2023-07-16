const sliderImages = document.querySelectorAll('.slider__slide');
const sliderButtons = document.querySelectorAll('.slider__button');

let swiperFocus = sliderImages.length - sliderImages.length;

document.addEventListener('DOMContentLoaded', swiperHandler);

var swiperHandler = setInterval(function () {
    if (swiperFocus < sliderImages.length - 1) {
        swiperFocus++
    } else { swiperFocus = sliderImages.length - sliderImages.length; }
    console.log(swiperFocus);

    sliderButtons.forEach((button) => {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
        }
    })
    sliderButtons[swiperFocus].classList.add('active');

    sliderImages.forEach((image) => {
        if (image.classList.contains('active')) {
            image.classList.remove('active');
        }
    })
    sliderImages[swiperFocus].classList.add('active');

    // let numfoc = null;
    // let slfoc = null;

    // sliderButtons.forEach((button, index) => {
    //     if (button.classList.contains('active')) {
    //         slfoc = button;
    //         if (index < 3) {
    //             numfoc = index + 1;
    //         } else {
    //             numfoc = 0;
    //         }

    //         console.log(numfoc);
    //         console.log(slfoc);
    //     }
    // })

    // sliderButtons[numfoc].classList.add('active');
    // slfoc.classList.remove('active');


    // let btnfoc = null;
    // sliderImages.forEach((images, index) => {
    //     if (images.classList.contains('active')) {
    //         btnfoc = images;
    //     }
    // })

    // sliderImages[numfoc].classList.add('active');
    // btnfoc.classList.remove('active');



}, 10000);