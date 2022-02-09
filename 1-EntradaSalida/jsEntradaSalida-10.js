/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var totalConDescuento;
    
	importe = document.getElementById("txtIdImporte").value;
    importe = parseInt(importe);
	
	porcentaje = importe * 0.25;
	totalConDescuento = importe - porcentaje;

	document.getElementById("txtIdResultado").value =totalConDescuento;
	
}
