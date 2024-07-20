// No reload on click link

const nav_links = document.querySelectorAll('.nav-link')
nav_links.forEach((nav_link)=>{
    nav_link.addEventListener("click",(e)=>{
        e.preventDefault();
    })
})
const sub_links = document.querySelectorAll('.submenu-link')
sub_links.forEach((sub_link)=>{
    sub_link.addEventListener("click",(e)=>{
        e.preventDefault();
    })
})


// Scroll on top when butten click
const btns = document.querySelectorAll(".btn")
btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        window.scrollTo({top:0,behavior:"smooth"})
    })
})


// MObile Navigation

const primary_header = document.querySelector(".primary-header")

const nav_btn = document.querySelector(".btn-menu")

nav_btn.addEventListener("click",()=>{
    primary_header.classList.toggle("nav-open")
})




// sticky header
window.addEventListener("scroll",()=>{
    const header = document.querySelector(".primary-header")

    if(scrollY > 40){
        primary_header.classList.add("sticky")
    }
    else{
        primary_header.classList.remove("sticky")
    }
})








// carousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
  items:3,
  loop:true,
  // margin:10,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            // loop:false
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

