const hamburger=document.querySelector('.hamburger');
const menu=document.querySelector('.menu');
const close=document.querySelector('.close');
hamburger.addEventListener('click',(e)=>{
  e.preventDefault();
  menu.classList.remove('d-md-none');
})
close.addEventListener('click',(e)=>{
  e.preventDefault();
  menu.classList.add('d-md-none');
})