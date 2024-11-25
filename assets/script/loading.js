const loadingElement = document.querySelector(".loading");
const headerElment = document.querySelector("header");
const IframeElement = document.querySelector(".iframe");
const textElement = document.querySelector(".alerta");
const arrowElement = document.querySelector(".arrow");
headerElment.style.display = "none";
IframeElement.style.display = "none";
textElement.style.display = "none";
arrowElement.style.display = "none";
// Adiciona um evento para quando a animação terminar
loadingElement.addEventListener("animationend", () => {
  loadingElement.classList.add("hidden");
  headerElment.style.display = "block";
  IframeElement.style.display = "block";
  textElement.style.display = "block";
  arrowElement.style.display = "block";
});
