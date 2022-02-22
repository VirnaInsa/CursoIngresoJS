function mostrar()
{

	var contadorDedivisores;
	var numeroIngresado;

	contadorDedivisores=0
	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);

	for(i =1; i<= numeroIngresado;i++){
		
		if (numeroIngresado % i == 0) {
			contadorDedivisores++
			document.write("<br>"+ i);
		}

	}
	document.write("<br> La cantidad de números divisores son : "+ contadorDedivisores);



}//FIN DE LA FUNCIÓN