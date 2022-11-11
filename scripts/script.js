const swiperCompetitions = new Swiper('.swiper',{

    //Touching
    simulateTouch:true,
    touchRatio: 0.25,
    grabCursor: true,

    //Keyboard controll
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

    followFinger: true
});

const swiperRespond = new Swiper(".swiper-respond", {
    //Touching
    simulateTouch: false,

    //Keyboard controll
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    
    slidesPerView: 1,

    spaceBetween: 100,

    slidesPerGroup: 1,

    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter:true
    // },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});