const size = document.getElementById("size");
const color = document.getElementById("color");
const figure = document.getElementById("figure");

const kvadrat = document.getElementById("kvadrat");

let changeColor = true;

size.addEventListener("click", () => {
  // console.log(kvadrat);

  // kvadrat.classList.add("style1"); /* Если надо будет через классы CSS */

  kvadrat.style.width = "100px";
  kvadrat.style.height = "100px";
  kvadrat.style.marginLeft = "100px";
});

color.addEventListener("click", () => {
  // console.log("test");

  if (changeColor) {
    kvadrat.style.background = "#ffff66"; // yellow if true
    changeColor = !changeColor;
    console.log("#ffff66", changeColor);
  } else {
    kvadrat.style.background = "#252575"; // blue if false
    changeColor = !changeColor;
    console.log("#252575", changeColor);
  }

  kvadrat.style.marginTop = "100px";
});

figure.addEventListener("click", () => {
  if (changeColor) {
    kvadrat.style.borderRadius = "0%";
  } else {
    kvadrat.style.borderRadius = "50%";
  }
});
