/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	var flag;

	flag= 0;
	sumaPositivos=0;
	multiplicacionNegativos=0;
	
	do {
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado>=0) {
			sumaPositivos = numeroIngresado + numeroIngresado;

		} else {
			if (multiplicacionNegativos== 0) {
				multiplicacionNegativos = 1;	
			}else{
				multiplicacionNegativos = 1;
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			}
			
		
		}


		respuesta = prompt("¿Quiere ingresar otro numero")
	} while (respuesta == "si");

	
    document.getElementById("txtIdProducto").value = multiplicacionNegativos;
	document.getElementById("txtIdSuma").value= sumaPositivos;
	
} //FIN DE LA FUNCIÓN
/*
 function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	
	respuesta='si';
	
	while (respuesta == "si"){
		numeroIngresado = prompt ("Ingrese un numero");
		numeroIngresado = parseFloat (numeroIngresado);
		contador++;
	
		if (numeroIngresado<0){
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado
		}
		else{
			sumaPositivos = numeroIngresado + sumaPositivos;
		}
		respuesta = prompt ("Desea agregar otro numero?","si");
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}
*/