const header = document.getElementById("header");
const btnLi = document.getElementById("btnLi");
const htmlElem = document.querySelector("[aria-label]");
const words = htmlElem.getAttribute("aria-label");
const mChars = `M M M M M M M M M M M M M M
            M M M M M M M M M M M M M M M M M M M M M
           M M M M M M M M M M M M M M M M M M M M M M M M M
            M M M M M M M M M M M M
            M M M M M M M M M M M M M M M M M M M
            M M M M M M M M M M M M M M M M M M M M M
            M M M M M M M M M M M M M M
           M M M M M M M M M M M M M M M M M
           M M M M M M M M M M M M M M M M M M M
            M M M M M M M M M M M M M M M M M M M M M M M
           M M M M M M M M M M M M
            M M M M M M M M M M M M
            M M M M M M M M M M M M M M M M M M M M M
            M M M M M M M M M M M
            M M M M M M M M M M M M M M M M M
            M M M M M M M M M M M M M M M M`;
window.addEventListener("scroll", function () {
  if (window.scrollY > 250) {
    header.style.backgroundColor = "white";
    btnLi.style.backgroundColor = "#1a8917";
    console.log(words);
  } else {
    header.style.backgroundColor = "#ffc017";
    btnLi.style.backgroundColor = "black";
  }
});
