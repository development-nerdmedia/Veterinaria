var navToggler = document.querySelector(".contact");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("activo");
    document.querySelector(".contacto").classList.toggle("open");
}

/* close nav when clicking on a nav item */
document.addEventListener("click", function(e){
    if(e.target.closest(".close")){
        toggleNav();
    }
});

var navToggler = document.querySelector(".contact2");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("activo");
    document.querySelector(".contacto").classList.toggle("open");
}

var navToggler = document.querySelector(".contact3");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("activo");
    document.querySelector(".contacto").classList.toggle("open");
}

var navToggler = document.querySelector(".contact4");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("activo");
    document.querySelector(".contacto").classList.toggle("open");
}

var navToggler = document.querySelector(".contact5");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("activo");
    document.querySelector(".contacto").classList.toggle("open");
}

var navToggler = document.querySelector(".contact6");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("activo");
    document.querySelector(".contacto").classList.toggle("open");
}

var navToggler = document.querySelector(".contact7");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("activo");
    document.querySelector(".contacto").classList.toggle("open");
}

// $('.slidernew').slick({
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 6000,
//     speed: 800,
//     slidesToShow: 1,
//     adaptiveHeight: true
//   });

//   $('.slidernew').slick();

/* carrusel de imagenes equipo administrativo */
const slider = document.querySelector("#slider1");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnRight = document.querySelector("#btn-right");
const btnLeft = document.querySelector("#btn-left");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnLeft.addEventListener('click', function(){
    Next();
});

btnRight.addEventListener('click', function(){
    Prev();
});

setInterval(function(){
    Next();
}, 5000);