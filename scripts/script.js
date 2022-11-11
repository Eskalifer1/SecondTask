const swiper = new Swiper('.swiper',{

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
        disableOnInteraction: false
    }
});