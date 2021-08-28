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

function animationRecall() {
    elem.classList.add("animationRecall--active");
}

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

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.3,
    spaceBetween: 60,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },

    pagination: {
        el: '.swiper-pagination-progressbar',
        type: 'progressbar',
      },
  });

