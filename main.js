

var sunDisplay= document.getElementById('sun');
var moonDisplay = document.getElementById('moon');



const typed = new Typed('.typer', {
  strings: ['Inaolaji Ridwan' ],
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
});


moonDisplay.style.display='none'

sunDisplay.onclick = function() {
    sunDisplay.style.display="none";
    document.querySelector('body').style.backgroundColor="white";
    moonDisplay.style.display="block";

    moonDisplay.onclick = function(){
      sunDisplay.style.display="block";
      document.querySelector('body').style.backgroundColor="black";
      moonDisplay.style.display="none"; 
    }
}
