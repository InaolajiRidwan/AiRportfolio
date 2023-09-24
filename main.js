
const typed = new Typed('.typer', {
  strings: ['Inaolaji A. Ridwan.' ],
  typeSpeed: 100,
  backspeed: 100,
  loop: true
});


document.addEventListener("click", function(e) {
    if (e.target.classList.contains("gallery-item")){
        const src=e.target.getAttribute("src");
        document.querySelector(".modal-img").src=src;
        const myModal = new bootstrap.Modal(document.getElementById("gallery-modal"));
        myModal.show();
    }
})