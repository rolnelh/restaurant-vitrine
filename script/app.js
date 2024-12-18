var hamburger = document.querySelector('.hamburger');
var ul = document.querySelector('ul');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    ul.classList.toggle('open');
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        document.querySelector('header').classList.add('sticky');
    } else {
        document.querySelector('header').classList.remove('sticky');
    }
});
