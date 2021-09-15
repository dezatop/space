    // Показать-убрать попап видео

const openBtnPopupVideo = document.querySelector(".start-screen__btn-video");
const closeBtnPopupVideo = document.querySelector(".start-screen__popup-btn-close");
const closeAreaPopupVideo = document.querySelector(".start-screen__popup-bg-video");
const popupVideo = document.querySelector(".start-screen__popup-video");


function openPopupVideo() {
    popupVideo.classList.remove("hidden");
};

function closePopupVideo() {
    popupVideo.classList.add("hidden");
};

openBtnPopupVideo.addEventListener("click", openPopupVideo);
closeBtnPopupVideo.addEventListener("click", closePopupVideo);
closeAreaPopupVideo.addEventListener("click", closePopupVideo);

    // Анимация появления блоков

let animationBlocks = document.querySelectorAll(".animation")

function animation () {
    for (let elem of animationBlocks) {
        let elemPos = elem.getBoundingClientRect().y < window.innerHeight;

        if (elemPos) {
            elem.classList.add("animation--active");
        }
    }
}

            // function animation () {
            //     for (let elem of animationBlocks) {
            //         let elemPos = Math.round(elem.getBoundingClientRect().y - window.innerHeight);

            //         if (elemPos < 40) {
            //             elem.classList.add("animation--active");
            //         }
            //     }
            // }

document.addEventListener("DOMContentLoaded", animation);
window.addEventListener("scroll", animation);

    //  Кнопка Связаться с нами

const recallLink = document.querySelector(".recall__link");
const recallText = document.querySelector(".recall__text");


function animationRecallIn () {
    recallText.classList.add("animation-recall--in");
    recallText.classList.remove("animation-recall--out");
}

function animationRecallOut () {
    recallText.classList.add("animation-recall--out");
    recallText.classList.remove("animation-recall--in");
}

recallLink.addEventListener("mouseenter", animationRecallIn);
recallLink.addEventListener("mouseleave", animationRecallOut);

    // Слайдер

const swiperAbout = new Swiper('.slider-about__swiper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.3,
    spaceBetween: 60,

  
    navigation: {
      nextEl: '.slider-about__button-right',
      prevEl: '.slider-about__button-left',
    },

    pagination: {
        el: '.slider-about__progressbar',
        type: 'progressbar',
      },
  });

 
let currSlide;
let numSlide = document.querySelector(".slider-aboutabout__fraction-text");

swiperAbout.on('activeIndexChange', function () {
    currSlide = document.querySelector(".swiper-slide-next").ariaLabel;
    console.log(currSlide);
    
    numSlide.textContent = currSlide;
});

function addNumSlide () {
    currSlide = document.querySelector(".swiper-slide-active").ariaLabel;
    console.log(currSlide);
    
    numSlide.textContent = currSlide;
};

document.addEventListener("DOMContentLoaded", addNumSlide);

const swiperServices = new Swiper('.slider-services__swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4.2,
  });

  // Услуги

let servDescrWrapper = document.querySelector(".price__service-description");
let servDescr = document.querySelector(".service-description__wrapper");
console.log(servDescrWrapper);


servDescrWrapper.addEventListener("mouseenter", () => {
    servDescr.classList.toggle("service-description__wrapper--none");

});
servDescrWrapper.addEventListener("mouseleave", () => {
    servDescr.classList.toggle("service-description__wrapper--none");

});



