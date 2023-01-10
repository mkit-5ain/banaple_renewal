document.addEventListener("DOMContentLoaded", () => {
    menuEvent();
    depthEvent('.depth');
    swiper('.main-swiper');
    responsiveCheck();
    sectionAction();
});

window.onresize = function () {
    responsiveCheck();
}

function menuEvent () {
    let ele = document.querySelector('.menu-btn');
    let category = document.querySelector(".category.mobile-layout");
    ele.addEventListener("click", function() {
        category.classList.toggle('active');
    })
}

function depthEvent () {
    let ele = document.querySelector('.depth');
    ele.addEventListener('click', function() {
        ele.classList.toggle('active');
    })
}

function videoControl () {
    const video = document.querySelector('.video');
    const audio = document.querySelector('.video-sound');
    const progressBar = document.querySelector('.progress-bar');

    function soundPause () {
        if (video.muted) {
            video.muted = false;
            this.classList.add('active');
        } else {
            video.muted = true;
            this.classList.remove('active');
        }
    }

    function handleProgress() {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${percent}%`;
    }

    audio.addEventListener('click', soundPause);
    video.addEventListener('timeupdate', handleProgress);
    video.muted = true;
    video.loop = true;
    video.play();
}

function swiper (SwiperObj) {
    let swiper = new Swiper(SwiperObj, {
        loop: true,
        pagination: {
        	el: ".swiper-pagination",
            clickable: true,
            type : 'bullets',
		}
    });
}

function responsiveCheck () {
    let windowWidth = window.matchMedia('screen and (max-width: 1240px)');
    if (windowWidth.matches) {
        swiper();
    } else {
        videoControl();
    }
}

function sectionAction () {
    const header = document.querySelector('header');
    const videoEle = document.querySelector('.video-wrap');
    const contactEle = document.querySelector('.contact-wrap');
    
    function scrollAction () {   
        let windowScroll = window.scrollY;

        if ( videoEle.getBoundingClientRect().height > windowScroll || contactEle.offsetTop < windowScroll && contactEle.offsetTop + contactEle.offsetHeight >= windowScroll ) {
            header.classList.add('reverse');
        } else if ( videoEle.getBoundingClientRect().height < windowScroll || contactEle.offsetTop + contactEle.offsetHeight < windowScroll ) {
            header.classList.remove('reverse');
        }
    }
    scrollAction();
    window.addEventListener('scroll', function () {
        scrollAction();
    });
}


