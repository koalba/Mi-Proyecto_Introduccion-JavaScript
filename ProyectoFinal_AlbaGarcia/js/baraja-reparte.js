function barajaTarjetas(lasTarjetas) {
  // Funcion para colocar las tarjetas de forma aleatoria, con el 0.5 comenzamos en la mitad del array, y con el math random colocamos hacia un lado u otro los iconos. Con return devolvemos el resultado del cálculo.
  var resultado;

  var totalTarjetas = lasTarjetas.concat(lasTarjetas);

  resultado = totalTarjetas.sort(function () {
    return 0.5 - Math.random();
  });
  return resultado;
}

function reparteTarjetas(lasTarjetas) {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas(lasTarjetas);
  // Limpiamos la mesa de cartas
  mesa.innerHTML = "";

  // Creamos por cada tarjeta un div, modificamos su html para añadir las clases y el elemento del array correspondiente. Con appendChild, metemos ese div dentro del ID mesa.
  // Añadimos un data-valor con el elemento para más adelante utilizarlo para comprobar si acertamos o no la pareja, esto lo accedemos más adelante con dataset (accedemos a los atributos que cuenten con un data al principio) y .elnombre

  tarjetasBarajadas.forEach(function (elemento) {
    var tarjeta = document.createElement("div");
    tarjeta.innerHTML =
      "<div class = 'tarjeta' data-valor=" +
      elemento +
      ">" +
      "<div class ='tarjeta_icono'>" +
      elemento +
      "</div>" +
      "</div>";
    mesa.appendChild(tarjeta);
  });
}
