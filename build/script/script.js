    // Показать-убрать попап видео

const openBtnPopupVideo = document.querySelector(".start-screen__btn-video");
const closeBtnPopupVideo = document.querySelector(".start-screen__popup-btn-close");
const closeAreaPopupVideo = document.querySelector(".start-screen__popup-bg-video");
const popupVideo = document.querySelector(".start-screen__popup-video");


function openPopupVideo() {
    popupVideo.classList.remove("hidden");
    document.body.style.overflowY = 'hidden'
};

function closePopupVideo() {
    popupVideo.classList.add("hidden");
    document.body.style.overflowY = 'initial'
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

const mobileWidth = document.body.offsetWidth
const swiperAbout = new Swiper('.slider-about__swiper', {
    direction: 'horizontal',
    loop: true,
    initialSlide: 0,
    slidesPerView: 1.3,
    spaceBetween: mobileWidth < 510 ? 10 : 60,

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
    slidesPerView: mobileWidth < 510 ? 1.2 : 4.2,
    initialSlide: mobileWidth < 510 ? 0 : 1,
  });

  // Услуги

    const blockService = document.querySelectorAll('.service-description-initialView')
    const blockServiceMain = document.querySelectorAll('.price-service-main')

    blockService.forEach((r, index) => r.addEventListener('mouseenter', () => {
        blockServiceMain.forEach((p,i) => {
            if(i === index){
                p.classList.toggle('price-service-main-active')
                r.classList.toggle('service-description-initialView-false')
            }
        })
    } ))
    blockServiceMain.forEach((v, z) => v.addEventListener('mouseleave', () => {
        blockService.forEach((k,q) => {
            if(q === z){
                k.classList.toggle('service-description-initialView-false')
                v.classList.toggle('price-service-main-active')
            }
        })
    }))

//----------------------------------MobileMenu----------------------------------

    document.addEventListener("DOMContentLoaded", () => {
        let menu = document.querySelector('.mobile___menu')
        let navigation = document.querySelector('.header__navigation.navigation')
        let linkInMenu = document.querySelectorAll('.navigation__link')
        let activeMenu = document.body

        const clickOnBurger = () => {
            console.log("работатет")
            console.log(navigation)
            navigation.classList.toggle('active')
            menu.classList.toggle('active')
            activeMenu.classList.toggle('menuActive')
        }
        menu.addEventListener('click', clickOnBurger )
        if(mobileWidth < 510){
            linkInMenu.forEach(r=> r.addEventListener('click', clickOnBurger ))
        }
    })


