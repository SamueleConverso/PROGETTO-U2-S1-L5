//Gestione della navbar
const header = document.getElementById("header");
const heroDiv = document.getElementById("heroDiv");
const btnLi = document.getElementById("btnLi");

window.addEventListener("scroll", function () {
  if (window.scrollY >= heroDiv.offsetHeight) {
    header.style.backgroundColor = "white";
    btnLi.style.backgroundColor = "#1a8917";
  } else {
    header.style.backgroundColor = "#ffc017";
    btnLi.style.backgroundColor = "black";
  }
});

//Gestione delle "M" nella sezione hero
const gElems = document.querySelectorAll('g[stroke-linecap="butt"]');
const gFiltered = [];

gElems.forEach((g) => {
  if (g.querySelector("path") !== null) {
    gFiltered.push(g);
  }
});

function extractG() {
  let ranNum = Math.floor(Math.random() * gFiltered.length);
  const currentG = gFiltered[ranNum];
  return currentG;
}

setInterval(function () {
  const extractedG = extractG();
  if (extractedG.getAttribute("opacity") === "0") {
    extractedG.setAttribute("opacity", "1");
  } else if (extractedG.getAttribute("opacity") === "1") {
    extractedG.setAttribute("opacity", "0");
  }
}, 125);
