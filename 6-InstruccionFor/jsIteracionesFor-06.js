function mostrar()
{
	
	var contadorDePares;
	var numeroIngresado;

	contadorDePares=0
	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);

	for(i =1; i<= numeroIngresado;i++){
		
		if (i% 2 == 0) {
			contadorDePares++
			document.write("<br>"+ i);
		}

	}
	document.write("<br> La cantidad de pares que hay son : "+ contadorDePares);



}//FIN DE LA FUNCIÓN