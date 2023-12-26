/*let dayContainer = document.querySelector(".dayContainer");
let monthContainer = document.querySelector(".monthContainer");
let yearContainer = document.querySelector(".yearContainer");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let circle = document.querySelector(".circle");

circle.addEventListener("click", answer)

function answer() {
    dayContainer.classList.add(".error")
} */
function moveRight() {
  var button = document.getElementById('myButton');

  // Obtén la posición actual
  var currentPosition = button.getBoundingClientRect().left;

  // Calcula la nueva posición
  var newPosition = currentPosition + 200;

  // Aplica la nueva posición
  button.style.left = newPosition + 'px';

  // Eliminar la clase después de un tiempo suficiente para que ocurra la transición
  setTimeout(function() {
    button.style.transition = 'none'; // Deshabilitar temporalmente la transición
    button.style.left = '50%'; // Restablecer la posición a la original
    button.offsetHeight; // Fuerza un reflow, lo que activa la transición nuevamente
    button.style.transition = ''; // Habilitar la transición
  }, 500); // El tiempo debe coincidir con el tiempo de la transición (0.5s)
}
  


