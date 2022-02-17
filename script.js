const openModal = document.querySelector(".btn");
const contaIner = document.querySelector(".container");
const boDy = document.querySelector(".body");
const closeBtn = document.querySelector(".close");
const acceptBtn = document.querySelector(".accept");


openModal.addEventListener('click', function(event){
  event.preventdefault;
  contaIner.style.visibility = 'visible';
  boDy.style.visibility = 'visible';
  openModal.style.display = 'none';
  

})

closeBtn.addEventListener('click', function(event){
   event.preventdefault;
   contaIner.style.visibility = 'hidden';
  boDy.style.visibility = 'hidden';
  openModal.style.display = 'initial'

})

acceptBtn.addEventListener('click', function(event){
    event.preventdefault;
    contaIner.style.visibility = 'hidden';
   boDy.style.visibility = 'hidden';
   openModal.style.display = 'initial'
   prompt('Cookies accepted!')
 
 })