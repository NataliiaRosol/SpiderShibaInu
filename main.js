


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  
});


const itemQuestion = document.querySelectorAll('.accordeon-item');

itemQuestion.forEach(item => {
  item.addEventListener('click', ()=>{
    item.classList.toggle('active');    
  })
})