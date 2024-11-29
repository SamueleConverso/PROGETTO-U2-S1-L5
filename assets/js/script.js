const header = document.getElementById("header");
const btnLi = document.getElementById("btnLi");
// const htmlElem = document.querySelector("[aria-label]");
//const gElems = document.querySelectorAll("g");
// const words = htmlElem.getAttribute("aria-label");
// const mChars = `M M M M M M M M M M M M M M
//             M M M M M M M M M M M M M M M M M M M M M
//            M M M M M M M M M M M M M M M M M M M M M M M M M
//             M M M M M M M M M M M M
//             M M M M M M M M M M M M M M M M M M M
//             M M M M M M M M M M M M M M M M M M M M M
//             M M M M M M M M M M M M M M
//            M M M M M M M M M M M M M M M M M
//            M M M M M M M M M M M M M M M M M M M
//             M M M M M M M M M M M M M M M M M M M M M M M
//            M M M M M M M M M M M M
//             M M M M M M M M M M M M
//             M M M M M M M M M M M M M M M M M M M M M
//             M M M M M M M M M M M
//             M M M M M M M M M M M M M M M M M
//             M M M M M M M M M M M M M M M M`;

// setInterval(function () {
//   let newWords = words;
//   let ranNum = Math.floor(Math.random() * newWords.length);
//   newWords[ranNum].replace("M", "");
//   gElems.setAttribute("aria-label", "ciao");
// }, 1000);

window.addEventListener("scroll", function () {
  if (window.scrollY > 250) {
    header.style.backgroundColor = "white";
    btnLi.style.backgroundColor = "#1a8917";
  } else {
    header.style.backgroundColor = "#ffc017";
    btnLi.style.backgroundColor = "black";
  }
});
