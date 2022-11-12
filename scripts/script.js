// Swipers
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

const lazyImages = document.querySelectorAll('img[data-src]');
const windowHeight = document.documentElement.clientHeight;

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
            setTimeout(()=>{
                updateDuplicateSlides();
            })
        }
        delete lazyImagePositions[imgIndex];
    }
}

updateDuplicateSlides = function() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var slides = swiper.slides;
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass)))
    .each(function() {
      var idx = this.getAttribute('data-swiper-slide-index');
      this.innerHTML = $wrapperEl.children('.'+params.slideClass+'[data-swiper-slide-index="'+idx+'"]:not(.'+params.slideDuplicateClass+')').html();
  })
}