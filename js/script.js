
let loaderIcons = document.querySelector('#loaderIcons');

window.addEventListener('load',function(){

    loaderIcons.style.display='none';
})


const navmenu = document.querySelector('.nav-menu');
function toggleMenu(e){
    e.name=e.name === 'menu'?'close':'menu';    
    navmenu.classList.toggle('active')
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    speed:1500,
    delay: 4000,
    autoplay:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
})