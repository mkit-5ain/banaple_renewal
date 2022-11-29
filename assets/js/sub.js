document.addEventListener("DOMContentLoaded", () => {
    subSwiper('.sub-swiper');
    eleInclude();
});


window.onresize = function () {
    responsiveCheck();
}

window.addEventListener("load", () => {
    setTimeout(() => {
        menuEvent();
    }, 1);
});

function menuEvent () {
    let ele = document.querySelector('.menu-btn');
    let category = document.querySelector(".category.mobile-layout");
    ele.addEventListener("click", function() {
        category.classList.toggle('active');
    })
}

function responsiveCheck () {
    let windiwWwidth = window.matchMedia('screen and (max-width: 1240px)');
    if (windiwWwidth.matches) {
        menuEvent();
    } else {
        depthEvent();
    }
}

// function urlCheck( ) {
//     let banaple = document.querySelector('.gnb-banaple')
//     let urlPath = location.pathname.split('/')[1];
//     let gnbLength = ['index.html','banaple.html','service.html','recruit.html'];
//     if (urlPath == gnbLength[0]) {
//     } else if (urlPath == gnbLength[1]) {
//         console.log(banaple);
//     } else if (urlPath == gnbLength[2]) {
//     } else if (urlPath == gnbLength[3]) {
//     }
// }

function eleInclude () {
    window.addEventListener('load', function() {
        let allElements = document.getElementsByTagName('*');
        Array.prototype.forEach.call(allElements, function(el) {
            let includePath = el.dataset.includePath;
            if (includePath) {
                let xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        el.outerHTML = this.responseText;
                    }
                };
                xhttp.open('GET', includePath, true);
                xhttp.send();
            }
        });
    });
}


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
            360: { //브라우저가 360보다 클 때
                slidesPerView: 1.5,  
                spaceBetween: 10,
            },
            720: { //브라우저가 1920보다 클 때
                slidesPerView: 2.5,  
                spaceBetween: 20,
            },
            1920: { //브라우저가 1920보다 클 때
              slidesPerView: 3.5,  
              spaceBetween: 20,
            },
        }
    });
}

function depthEvent (obj, eleChildren) {
    let ele = document.querySelector(obj);
    let eleParents = document.querySelector(eleChildren);
    eleParents.addEventListener("click", function() {
        eleParents.classList.toggle('active');
    });
}