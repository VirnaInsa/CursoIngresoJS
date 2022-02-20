function mostrar()
{
	var destinoIngresado 
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Mar del plata":
		case "Cataratas":
			alert ("Hace calor");
			
			break;
	
		default:
			alert ("Hace frio");
			break;
	}

}//FIN DE LA FUNCIÓN