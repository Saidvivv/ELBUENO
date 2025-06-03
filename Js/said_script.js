
document.addEventListener("DOMContentLoaded", function () {
  // --- NAVBAR SCROLL ---
const navbar = document.querySelector(".navbar-scroll");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
navbar.classList.add("scrolled");
    } else {
navbar.classList.remove("scrolled");
    }
});

  // --- ANIMACIÓN FLOTANTE ---
class AnimacionFlotante {
    constructor(elementId) {
this.element = document.getElementById(elementId);
      if (!this.element) return; // Evita errores si no se encuentra el elemento
this.posicion = 0;
this.direccion = -1;
    this.iniciar();
    }

    iniciar() {
    setInterval(() => {
        this.posicion += this.direccion;
        if (this.posicion > 15 || this.posicion < -15) {
          this.direccion *= -1;
        }
        this.element.style.transform = translateY(${this.posicion}px);
    }, 70);
    }
}

  // Ejecutamos la animación para la imagen con ID 'imagenFlotante'
new AnimacionFlotante("imagenFlotante");
});