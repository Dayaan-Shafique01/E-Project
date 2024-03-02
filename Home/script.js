// Black Theme
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "../Images/other/sun.png";
    } else {
        icon.src = "../Images/other/moon.png";
    }
};

// Pre-Loader
$(document).ready(function () {
    var count = 0;
    var counter = setInterval(function () {
        if (count < 101) {
            $('.count').text(count + '%');
            $('.loader').css('width', count + '%');
            count++
        }
        else {
            clearInterval(counter)
        }
    }, 2)
})

window.addEventListener('load', function () {
    var preloader = document.getElementById('preloader');
    setTimeout(function () {
        preloader.style.display = 'none';
    },
        4000);
});

// Pop-Up Script
const popup = document.querySelector('.pop-up');
const close = document.querySelector('.close');
const body = document.querySelector('body');

window.onload = function () {
    setTimeout(function () {
        popup.style.display = 'block';
        body.classList.add('popup-open');
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        body.appendChild(overlay);
    }, 100);
}

close.addEventListener('click', () => {
    popup.style.display = "none";
    body.classList.remove('popup-open');
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        body.removeChild(overlay);
    }
});

// Main Slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 800,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Products Slider
var swiper = new Swiper(".cards", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 700,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 5,
        slideShadows: true,
    },
});