function mostrar()
{
	var destinoIngresado 
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Cataratas":
			alert ("Se encuentra al Norte");
			break;
	
		default:
			alert ("Se encuentra al Sur");
			break;
	}

}//FIN DE LA FUNCIÓN