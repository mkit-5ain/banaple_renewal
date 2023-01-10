document.addEventListener('DOMContentLoaded', () => {
    menuEvent();
    toggleEvent('.depth');
    toggleEvent('.faq .list-item');
    toggleEvent('.ico_tip');
    recruitLayer();
    getFilename();
});


function menuEvent () {
    let ele = document.querySelector('.menu-btn');
    let category = document.querySelector('.category.mobile-layout');
    ele.addEventListener('click', () => {
        category.classList.toggle('active');
    })
}

function toggleEvent (obj) {
    let ele = document.querySelector(obj);
    ele.addEventListener('click', () => {
        ele.classList.toggle('active');
    });
}

function recruitLayer () {
    let ele = document.querySelectorAll('.recruit .list-item');
    let layer = document.querySelector('.recruit-layer');
    let layerInner = document.querySelector('.recruit-layer .msg-wrap');
    let layerHeight = layer.clientHeight;
    let layerClose = document.querySelector('.btn-close');
    let viewHeight = document.documentElement.clientHeight;
    const body = document.querySelector('body');

    ele.forEach((item) => {
        item.addEventListener('click', () => {
            layer.classList.add('active');
            body.classList.add('scroll-lock');
        });
    });

    layerClose.addEventListener('click', () => {
        layer.classList.remove('active');
        body.classList.remove('scroll-lock');
    })

}

function getFilename(filename) {
    var arSplitUrl = filename.split('\\');
    var nArLength = arSplitUrl.length;
    var arFileName = arSplitUrl[nArLength-1];
    return arFileName;
}