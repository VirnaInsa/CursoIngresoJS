/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0;
	respuesta="si";

	while (respuesta == "si") {
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = numeroIngresado + acumulador;

		respuesta = prompt("¿Quiere ingresar otro número?");

		contador++;
	}
	promedio = acumulador / contador;


	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN