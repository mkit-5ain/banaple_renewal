document.addEventListener("DOMContentLoaded", () => {
    menuEvent();
    depthEvent('.depth');
    layoutMarign();
});

window.onresize = function () {
    layoutMarign();
}

function menuEvent () {
    let ele = document.querySelector('.menu-btn');
    let category = document.querySelector(".category.mobile-layout");
    ele.addEventListener("click", function() {
        category.classList.toggle('active');
    })
}

function depthEvent (obj) {
    let ele = document.querySelector(obj);
    ele.addEventListener("click", function() {
        ele.classList.toggle('active');
    });
}

function layoutMarign () {
    let ele = document.querySelector('.culture .inner');
    let eleValue = ele.getBoundingClientRect().x;
    let layout = document.querySelector('.workspace .inner');
    let swiperNavi = document.querySelector('.sub-swiper-btn-wrap');
    
    layout.style.marginLeft = eleValue + 'px';
    swiperNavi.style.right = eleValue + 'px';
    
}