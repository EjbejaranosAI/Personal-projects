var imagenes = ["./IMG/ML.png", "./IMG/TML.png", "./IMG/PW.jpg", "./IMG/TML2.png"],
    cont = 0;



let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let mountains_behind = document.getElementById('mountains_behind');

const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#sidemenu');
btn.addEventListener('click', e => {
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");

    document.querySelector('body').classList.toggle('body-expanded');
});




window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.right = value * 10.05 + 'px';
    moon.style.left = value * 1.05 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.left = value * 1.3 + 'px';

})


function carrousel(myproject) {
    myproject.addEventListener('click', e => {
        let back = myproject.querySelector('.back'),
            next = myproject.querySelector('.next'),
            img = myproject.querySelector('img'),
            tgt = e.target;

        if (tgt == back) {
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        } else if (tgt == next) {
            if (cont < imagenes.length - 1) {
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont - 0;
            }
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    let myproject = document.querySelector('.myproject');

    carrousel(myproject);
});