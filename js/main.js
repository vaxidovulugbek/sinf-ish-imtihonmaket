let a = 0;
document.getElementById('modeBtn').addEventListener('click', function () {
  // document.getElementById('header').classList.toggle('dark');
  document.body.classList.toggle('dark');
  if (a == 0) {
    a++;
  } else {
    a = 0;
  }
});

let modalBtn = document.getElementById("openBtn");
let modal = document.getElementById("openModal")
let closeModal = document.getElementById("closeBtn")
let bodyPadding = document.getElementById("bodyPadding")

modalBtn.addEventListener('click',function(){
  modal.style.display = "block"
  bodyPadding.style.paddingTop = "0"
  
} )
closeModal.addEventListener('click', function(){
  modal.style.display = 'none'
})





