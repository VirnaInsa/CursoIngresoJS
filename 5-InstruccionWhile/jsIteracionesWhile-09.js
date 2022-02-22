/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var flag;
	//iniciar variables
	respuesta='si';
	flag= 0;
	do {
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if (flag == 0||numeroIngresado > numeroMaximo) {
            numeroMaximo = numeroIngresado;
				
		}
		if (flag == 0||numeroIngresado < numeroMinimo) {
			numeroMinimo = numeroIngresado;


			flag = 1;
		}
		


		respuesta= prompt("¿Quiere ingresar otro número?");
	} while (respuesta == 'si');
	document.getElementById("txtIdMaximo").value= numeroMaximo;
	document.getElementById("txtIdMinimo").value= numeroMinimo;
}//FIN DE LA FUNCIÓN