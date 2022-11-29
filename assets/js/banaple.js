document.addEventListener("DOMContentLoaded", () => {
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
function depthEvent (obj) {
    let ele = document.querySelector(obj);
    ele.addEventListener("click", function() {
        ele.classList.toggle('active');
    });
}