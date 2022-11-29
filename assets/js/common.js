document.addEventListener("DOMContentLoaded", () => {
    let myFullpage = new fullpage('#fullpage', {});
    // videoControl();
    menuEvent();
    depthEvent('.depth');
});


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
    // const play = document.querySelector('.play');
    const progressBar = document.querySelector('.progress-bar');

    // function playPauseMedia () {
    //     if (video.paused) {
    //         video.play();
    //     } else {
    //         video.pause();
    //     }
    // }

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

    // play.addEventListener('click', playPauseMedia);
    audio.addEventListener('click', soundPause);
    video.addEventListener('timeupdate', handleProgress);
    video.muted = true;
    video.loop = true;
    video.play();
}