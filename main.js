var sunDisplay = document.getElementById("sun");
var moonDisplay = document.getElementById("moon");

sunDisplay.style.display = "none";

moonDisplay.onclick = function () {
  moonDisplay.style.display = "none";
  document.getElementById("body").style.backgroundColor = "rgb(72, 72, 72)";
  sunDisplay.style.display = "block";
  document.getElementById("body").style.color = "white";
  document.querySelector(".navbar-brand").style.color = "black";
 
  
 

  document.getElementById("jj").style.color = "black";
  document.getElementById("jj1").style.color = "black";
  document.getElementById("jj2").style.color = "black";
  document.getElementById("jj3").style.color = "black";
 

  sunDisplay.onclick = function () {
    moonDisplay.style.display = "block";
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("logoA").style.color = "black";
    sunDisplay.style.display = "none";
    document.getElementById("body").style.color = "black";
  };
};

const typed = new Typed(".typer", {
  strings: ["Inaolaji Ridwan."],
  typeSpeed: 500,
  backspeed: 500,
  loop: true,
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
});
