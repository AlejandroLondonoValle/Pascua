import "../src/style.css"


// main.js

// Seleccionar los círculos y el mensaje
const colorBoxes = document.querySelectorAll('.color-box');
const message = document.getElementById('message');

// Función para cambiar el color y el mensaje
colorBoxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    // Cambiar el color del círculo al hacer clic
    box.classList.toggle('clicked');
    
    // Cambiar el mensaje dependiendo del círculo seleccionado
    switch(index) {
      case 0:
        message.textContent = "¡Pascua llena de colores!";
        break;
      case 1:
        message.textContent = "¡Disfruta de la primavera!";
        break;
      case 2:
        message.textContent = "¡Que los huevos de Pascua traigan alegría!";
        break;
    }
  });
});
