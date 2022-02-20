function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0;

	while (contador <5) {
		
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		acumulador = acumulador + numeroIngresado;

		contador++;
	}
	promedio = acumulador / 5;

    document.getElementById("txtIdSuma").value = acumulador
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN