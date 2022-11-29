document.addEventListener("DOMContentLoaded", () => {
    parallax();
});
function parallax () {
    let observer = new IntersectionObserver( (e) => {
        threshold: [0, 0.25, 0.5, 0.75, 1];
        e.forEach( (section) => {
            if (section.isIntersecting) {
                section.target.classList.add('active');
            }
        }); 
    })
    
    let section = document.querySelectorAll('.action');
    section.forEach(sections => observer.observe(sections));
}