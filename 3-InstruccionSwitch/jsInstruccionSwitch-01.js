function mostrar()
{
	//tomo el mes
	var mesAnual;
	mesAnual = document.getElementById("txtIdMes").value;
	
	switch (mesAnual) {
		case "Enero":
			alert ("que comiences bien el año ");
			break;
	
		case "Marzo": 
			alert ("a clases");
			break;

		case "Julio":
			alert ("se viene las vacaciones");
			break;
			
		case "Diciembre":
			alert ("Felices fiestas");
			break;	
	}



}//FIN DE LA FUNCIÓN