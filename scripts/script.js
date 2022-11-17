const swiperCompetitions = new Swiper('.swiper',{
    simulateTouch:true,
    touchRatio: 0.25,
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,

    loop: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter:true
    },

    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    followFinger: true,
    breakpoints:{
        1025:{
            slidesPerView: 4
        },
        950:{
            slidesPerView: 3.5
        },
        850:{
            slidesPerView: 3
        },
        768:{
            slidesPerView: 2.5
        },
        600:{
            slidesPerView: 2.2
        },
        550:{
            slidesPerView: 2
        },
        420:{
            slidesPerView: 1.6
        },
        380:{
            slidesPerView: 1.4
        },
        340:{
            slidesPerView: 1.25
        },
        320:{
            slidesPerView: 1.15
        }
    }
});
const swiperRespond = new Swiper(".swiper-respond", {
    simulateTouch:false,
    touchRatio: 0.25,
    speed:800,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    slidesPerView: 1,
    spaceBetween: 100,
    slidesPerGroup: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints:{
        768:{
            spaceBetween: 0
        }
    }
});

const lazyImages = document.querySelectorAll('img[data-src]');
let windowHeight = document.documentElement.clientHeight;
let burger = document.querySelector(".header__burger");
let nav = document.querySelector(".nav");
let body = document.querySelector("body");
function orientationChecker(){
    windowHeight = document.documentElement.clientHeight;
    windowWidth = document.documentElement.clientWidth;
    if(windowWidth > (windowHeight - 60)){
        document.querySelector("body").classList.add("resize");
    } else document.querySelector("body").classList.remove("resize");
}
window.addEventListener("load", orientationChecker)
window.addEventListener('resize',orientationChecker);
let lazyImagePositions = [];
if(lazyImages.length > 0){
    lazyImages.forEach(img => {
        if(img.dataset.src){
            lazyImagePositions.push(img.getBoundingClientRect().top + window.pageYOffset);
            lazyScrollCheck();
        }
    });
}
window.addEventListener("scroll",lazyScroll, { capture: true });
function lazyScroll(){
    if(document.querySelectorAll('img[data-src]').length > 0){
        lazyScrollCheck();
    }
}
function lazyScrollCheck(){
    let imgIndex = lazyImagePositions.findIndex(
        item => (self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop)) >= (item - windowHeight)
    );
    if(imgIndex >= 0){
        if(lazyImages[imgIndex].dataset.src){
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
            lazyImages[imgIndex].removeAttribute('data-src');
        }
        delete lazyImagePositions[imgIndex];
    }
}
burger.addEventListener("click", function(){        
    nav.classList.toggle("active");
    burger.classList.toggle("active");
    body.classList.toggle("lock");
});