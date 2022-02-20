function mostrar()
{
	var estacionIngresada; 
    var ciudadIngresada;
	var mensaje;
	mensaje = "Se viaja"

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	ciudadIngresada = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada) {
		case "Invierno":
			switch (ciudadIngresada) {
				case "Bariloche":
					
					break;
			
				default:
			        mensaje = "No se viaja";
					break;
			}
			
			break;
        case "Verano":
			switch (ciudadIngresada) {
				case "Mar del plata":
			    case "Cataratas":
					
					break;
			
				default:
					mensaje = "No se viaja";
					break;
			}
			break;

		case "Primavera":
			switch (ciudadIngresada) {
				case "Bariloche":
					mensaje = "No se viaja";
					
					break;
			
				default:
					break;
			}	
			break;
		default:
			alert ("Se viaja");
			break;
	}
	alert (mensaje);
}//FIN DE LA FUNCIÓN