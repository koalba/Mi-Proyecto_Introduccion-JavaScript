function eligeTarjetas() {
  var misBotones = document.querySelectorAll(".selectButton");
  console.log(this.id);
  if (this.id == "tarjetaFrutas") {
    grupoTarjetas = tarjetasFrutas;
    misBotones.forEach(function (elemento) {
      elemento.classList.remove("selected");
    });
    this.classList.add("selected");
  } else if (this.id == "tarjetaModa") {
    grupoTarjetas = tarjetasModa;
    misBotones.forEach(function (elemento) {
      elemento.classList.remove("selected");
    });
    this.classList.add("selected");
  } else if (this.id == "tarjetaAnimales") {
    grupoTarjetas = tarjetasAnimales;
    misBotones.forEach(function (elemento) {
      elemento.classList.remove("selected");
    });
    this.classList.add("selected");
  } else if (this.id == "tarjetaNatural") {
    grupoTarjetas = tarjetasNatural;
    misBotones.forEach(function (elemento) {
      elemento.classList.remove("selected");
    });
    this.classList.add("selected");
  }
  console.log(grupoTarjetas);
}
