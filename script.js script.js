// Al hacer clic en el título
document.querySelector("h1").addEventListener("click", () => {
  alert("¡Hiciste clic en el título! 🌟");
});

// Al hacer clic en el botón
document.getElementById("btn").addEventListener("click", () => {
  alert("Botón pulsado 😊");
});

// Cambia color del título cada 1.5 segundos
const h1 = document.querySelector("h1");
const colors = ["#1a237e", "#ff4081", "#00bfa5", "#fdd835"];
let i = 0;
setInterval(() => {
  h1.style.color = colors[i % colors.length];
  i++;
}, 1500);

