function mostrar()
{

	var contadorDeDivisores;
	var numeroIngresado;

	contadorDeDivisores=0
	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);

	for(i =2; i< numeroIngresado;i++){
		
		if (numeroIngresado% 1 == 0) {
			contadorDeDivisores++
		}

	}
	if (contadorDeDivisores == 0) {
		alert( numeroIngresado + " es primo");
	}
	else {
		alert(numeroIngresado + " no es primo");
	}
	

}//FIN DE LA FUNCIÓN