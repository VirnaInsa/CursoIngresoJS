function mostrar()
{
	var estacionIngresada; 
    var ciudadIngresada;
    var precio = 15000;
    var precioTotal;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	ciudadIngresada = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada) {
		case "Invierno":
			switch (ciudadIngresada) {
				case "Bariloche":
					precioTotal= precio * 1.2;
					break;
				case "Cordoba":
					precioTotal	= precio * 0.9
					break;
				case "Mar del plata":
					precioTotal	= precio * 0.8
					break;					
				default:
					precioTotal	= precio 
					break;
			}
			
			break;
        case "Verano":
			switch (ciudadIngresada) {
				case "Bariloche":
					precioTotal= precio * 0.8;
					alert ("Precio final es " + precioTotal);	
					break;
				case "Mar del plata":
					precioTotal	= precio * 1.2;
					break;					
				default:
					precioTotal	= precio * 1.1;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (ciudadIngresada) {
				case "Cordoba":
				
				    precioTotal= precio;	
					break;
							
				default:
					precioTotal	= precio * 1.1;
					break;
			}
			break;
	}
    mensaje = "Precio final es " + precioTotal;
	alert (mensaje);
}//FIN DE LA FUNCIÓN