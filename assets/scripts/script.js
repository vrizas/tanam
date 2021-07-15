const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if(window.scrollY > 10) {
        header.classList.add('float');
    } else {
        header.classList.remove('float');
    }
});

const mobile = window.matchMedia("(max-width: 1279px)");
const nav = document.querySelector('nav');

function menu(mobile) {
    if(mobile.matches) {
        nav.addEventListener('click', function(e) {
            if(e.target.classList[2] == 'menu-button') {
                e.target.style.display = 'none';
                document.querySelector('.close-button').style.display = 'inherit';
                document.querySelector('.hamburger-menu').style.display = 'flex';
                document.querySelector('nav ul').style.display = 'flex';
            }
            if(e.target.classList[2] == 'close-button') {
                e.target.style.display = 'none';
                document.querySelector('.menu-button').style.display = 'inherit';
                document.querySelector('.hamburger-menu').style.display = 'none';
                document.querySelector('nav ul').style.display = 'none';
            }
        
            if(e.target.tagName == 'A') {
                document.querySelector('.close-button').style.display = 'none';
                document.querySelector('.menu-button').style.display = 'inherit';
                document.querySelector('.hamburger-menu').style.display = 'none';
                document.querySelector('nav ul').style.display = 'none';     
            }
        });
    }
}

menu(mobile);
mobile.addEventListener(menu);

