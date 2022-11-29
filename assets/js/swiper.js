document.addEventListener("DOMContentLoaded", () => {
    subSwiper('.sub-swiper');
});

function subSwiper (subSwiper) {
    let swiper = new Swiper(subSwiper, {
        slidesPerView: 3.5,
        spaceBetween: 20,
        loop: false,
        navigation: {
            prevEl: '.sub-swiper-button-prev',
            nextEl: '.sub-swiper-button-next'
        },
        breakpoints: {
            360: {
                slidesPerView: 1.5,  //브라우저가 360보다 클 때
                spaceBetween: 10,
            },
            720: {
                slidesPerView: 2.5,  //브라우저가 720보다 클 때
                spaceBetween: 20,
            },
            1920: {
              slidesPerView: 3.5,  //브라우저가 1920보다 클 때
              spaceBetween: 20,
            },
        }
    });
}