const header = document.getElementById("header");
const btnLi = document.getElementById("btnLi");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    header.style.backgroundColor = "white";
    btnLi.style.backgroundColor = "green";
  } else {
    header.style.backgroundColor = "#ffc017";
    btnLi.style.backgroundColor = "black";
  }
});
