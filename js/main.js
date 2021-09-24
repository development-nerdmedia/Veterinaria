// jQuery(document).ready(function ($) {

//     $('#checkbox').change(function(){
//       setInterval(function () {
//           moveRight();
//       }, 3000);
//     });
    
//       var slideCount = $('#slider ul li').length;
//       var slideWidth = $('#slider ul li').width();
//       var slideHeight = $('#slider ul li').height();
//       var sliderUlWidth = slideCount * slideWidth;
      
//     //   $('#slider').css({ width: slideWidth, height: slideHeight });
      
//     //   $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
//       $('#slider ul li:last-child').prependTo('#slider ul');
  
//       function moveLeft() {
//           $('#slider ul').animate({
//               left: + slideWidth
//           }, 1000, function () {
//               $('#slider ul li:last-child').prependTo('#slider ul');
//               $('#slider ul').css('left', '');
//           });
//       };
  
//       function moveRight() {
//           $('#slider ul').animate({
//               left: - slideWidth
//           }, 1000, function () {
//               $('#slider ul li:first-child').appendTo('#slider ul');
//               $('#slider ul').css('left', '');
//           });
//       };
  
//       $('a.control_prev').click(function () {
//           moveLeft();
//       });
  
//       $('a.control_next').click(function () {
//           moveRight();
//       });
  
//   });    
  

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