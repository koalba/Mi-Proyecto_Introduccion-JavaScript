function actualizaCompra() {
  var miCompra = document.querySelector(".compra_vidas");
  if (puntuacion >= 100) {
    miCompra.classList.add("active");
    sePuedeComprar = true;
  } else {
    miCompra.classList.remove("active");
    sePuedeComprar = true;
  }
}

function realizaCompra() {
  var corazones = document.querySelectorAll(".far.fa-heart");
  if (sePuedeComprar === true && corazones.length > 0 && corazones.length < 3) {
    puntuacion = puntuacion - 100;
    calcularPuntuacion();
    corazones[corazones.length - 1].classList.replace("far", "fas");
    actualizarVidas();
    actualizaCompra();
  }
}
