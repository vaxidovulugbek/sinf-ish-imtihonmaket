let a = 0;
document.getElementById('modeBtn').addEventListener('click', function () {
  // document.getElementById('header').classList.toggle('dark');
  document.body.classList.toggle('dark');
  if (a == 0) {
    this.textContent = 'Li';
    a++;
  } else {
    this.textContent = 'Da';
    a = 0;
  }
});







