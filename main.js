const menuBtn = document.querySelector('.menu-icon');
const menuClose = document.querySelector('.menu-close');
const menuList = document.querySelector('.menu-list');

menuBtn.addEventListener('click', ()=> {
  menuList.classList.toggle('open');
});

menuClose.addEventListener('click', ()=> {
  menuList.classList.remove('open');
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    780:{
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200:{
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1625: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },

  
});


const itemQuestion = document.querySelectorAll('.accordeon-item');

itemQuestion.forEach(item => {
  item.addEventListener('click', ()=>{
    item.classList.toggle('active');    
  })
})