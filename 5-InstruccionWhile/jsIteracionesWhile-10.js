/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar(){
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaPositivos;
	var sumaNegativos;
	var cantidadDePositivos;
	var cantidadDeNegativos;
	var contadorDeCeros;
	var contadorDePares;
	var promedioDePositivos;
	var promedioDeNegativos;
	var diferencia;

	//Inicializacion de variables
	sumaPositivos = 0;
	sumaNegativos = 0;
	cantidadDePositivos = 0;
	cantidadDeNegativos = 0;
	contadorDeCeros = 0;
	contadorDePares = 0;
	promedioDePositivos =0;
	promedioDeNegativos =0;
	respuesta = "si";

	while(respuesta=="si"){
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > 0){
			sumaPositivos =sumaPositivos + numeroIngresado;
			cantidadDePositivos++;
		}else{
			if(numeroIngresado < 0){
				sumaNegativos =sumaNegativos + numeroIngresado;
				cantidadDeNegativos++;
			}else{
				contadorDeCeros++;
			}
		}

		if(numeroIngresado % 2 == 0 && numeroIngresado != 0){
			contadorDePares++;
		}
		respuesta = prompt("¿Desea ingresar otro número?");
	}//fin del while

	promedioDePositivos = sumaPositivos / cantidadDePositivos;
	promedioDeNegativos = sumaNegativos / cantidadDeNegativos;
	diferencia = sumaPositivos + sumaNegativos;

	document.write("<br> La suma de negativos es = " + sumaNegativos);
	document.write("<br> La suma de positivos es = "+sumaPositivos);
	document.write("<br> La cantidad de negativos es = "+cantidadDeNegativos);
	document.write("<br> la cantidad de positivos es = "+cantidadDePositivos);
	document.write("<br> La cantidad de ceros es = "+contadorDeCeros);
	document.write("<br> la cantidad de pares es = "+contadorDePares);
	document.write("<br> El promedio de negativos es = "+promedioDeNegativos);
	document.write("<br> El promedio de positivos es = "+promedioDePositivos);
	document.write("<br> La diferencia entre positivos y negativos es= " +diferencia);

	
}//FIN DE LA FUNCIÓN

