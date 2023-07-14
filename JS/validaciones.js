function calcularDescuento() {
    var video = document.getElementById("VideoBackground");
    var seleccionVuelo = document.getElementById("vuelo");
    var vueloSeleccionado = seleccionVuelo.options[seleccionVuelo.selectedIndex];
    var precioVuelo = parseInt(vueloSeleccionado.value);
  
    var fechaReserva = new Date(document.getElementById("fechaReserva").value);
    var fechaActual = new Date();
    var diferenciaDias = Math.ceil((fechaReserva - fechaActual) / (1000 * 60 * 60 * 24));
  
    var descuento = 0;
    if (diferenciaDias > 30 && diferenciaDias <= 60) {
      descuento = 0;
    } else if (diferenciaDias > 60 && diferenciaDias <= 90) {
      descuento = 0.1;
    } else if (diferenciaDias > 90 && diferenciaDias <= 120) {
      descuento = 0.15;
    }
  
    var precioFinal = precioVuelo * (1 - descuento);
  
    var elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = "Vuelo seleccionado: " + vueloSeleccionado.text + "<br>" +
      "Valor del pasaje: $" + precioVuelo.toLocaleString() + "<br>" +
      "Cantidad de días de reserva: " + diferenciaDias + "<br>" +
      "Descuento: " + (descuento * 100) + "%<br>" +
      "Monto final a pagar: $" + precioFinal.toLocaleString();
  
    alert("Vuelo seleccionado: " + vueloSeleccionado.text + "\n" +
      "Valor del pasaje: $" + precioVuelo.toLocaleString() + "\n" +
      "Cantidad de días de reserva: " + diferenciaDias + "\n" +
      "Descuento: " + (descuento * 100) + "%\n" +
      "Monto final a pagar: $" + precioFinal.toLocaleString());
  }
  