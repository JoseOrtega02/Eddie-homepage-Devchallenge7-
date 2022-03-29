const btn = document.querySelector('.btn-side');
const span = document.querySelector('.material-icons-outlined');

 btn.addEventListener('click', function () {
	document.getElementById('side-bar').classList.toggle('side-bar');
	myFunction();
});

 
 function myFunction() {
  if (span.innerHTML === "menu") {
    span.innerHTML = "close";
  } else {
    span.innerHTML = "menu";
  }
}