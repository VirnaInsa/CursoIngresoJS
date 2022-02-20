function mostrar()
{
	//tomo el mes
	var mesAnual;

	mesAnual = document.getElementById("txtIdMes").value;
	
	switch (mesAnual) {
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert ("Tiene 30 días");
			
			break;
		case "Febrero":
			alert ("tiene 28 días");	
            break;	
		default:
			alert ("tiene 31 días");
			break;
	}
	



}//FIN DE LA FUNCIÓN