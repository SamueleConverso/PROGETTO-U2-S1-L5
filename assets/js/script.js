const header = document.getElementById("header");
const heroDiv = document.getElementById("heroDiv");
const btnLi = document.getElementById("btnLi");
window.addEventListener("scroll", function () {
  if (window.scrollY > heroDiv.offsetHeight) {
    header.style.backgroundColor = "white";
    btnLi.style.backgroundColor = "#1a8917";
  } else {
    header.style.backgroundColor = "#ffc017";
    btnLi.style.backgroundColor = "black";
  }
});

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

const gElems = document.querySelectorAll('g[stroke-linecap="butt"]');

function extractG() {
  let ranNum = Math.floor(Math.random() * gElems.length);
  const currentG = gElems[ranNum];
  return currentG;
}

setInterval(function () {
  const extractedG = extractG();
  if (extractedG.getAttribute("opacity") === "0") {
    extractedG.setAttribute("opacity", "1");
  } else {
    extractedG.setAttribute("opacity", "0");
  }
}, 100);
