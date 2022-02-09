/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var totalConAumento;
    
	importe = document.getElementById("txtIdSueldo").value;
    importe = parseInt(importe);
	
	porcentaje = importe * 0.1;
	totalConAumento = importe + porcentaje;
	console.log(totalConAumento);

	document.getElementById("txtIdResultado").value =totalConAumento;
	

}
