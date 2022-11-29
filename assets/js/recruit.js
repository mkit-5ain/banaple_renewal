document.addEventListener("DOMContentLoaded", () => {
    menuEvent();
    depthEvent('.depth');
    depthEvent('.faq .list-item');
});

function menuEvent () {
    let ele = document.querySelector('.menu-btn');
    let category = document.querySelector(".category.mobile-layout");
    ele.addEventListener("click", () => {
        category.classList.toggle('active');
    })
}
function depthEvent (obj) {
    let ele = document.querySelector(obj);
    ele.addEventListener("click", () => {
        ele.classList.toggle('active');
    });
}