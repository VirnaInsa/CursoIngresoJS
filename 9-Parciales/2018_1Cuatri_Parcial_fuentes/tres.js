/*Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id. */
function mostrar()
{
    var precio;
    var porcentaje;
    var preciofinal;

    precio = prompt("Ingresa precio");
    porcentaje = prompt("Ingrese porcentaje de descuento");
    precio = parseFloat(precio);
    porcentaje = parseFloat(porcentaje);

    preciofinal = precio * (1 - porcentaje/ 100 );

    document.getElementById("elPrecioFinal").value = preciofinal;





}
