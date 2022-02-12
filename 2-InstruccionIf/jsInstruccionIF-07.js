
/*
{
	var edad;
	var estadoCivil
	edad= document.getElementById("txtIdEdad").value;
	estadoCivil= document.getElementById("estadoCivil").value;

	if(edad<18 && estadoCivil!= "Soltero"){
		alert("Es muy pequeño para no ser soltero");

	}

	


}//FIN DE LA FUNCIÓN*/
function mostrar(){
	let edad;
	let mensaje;

	edad= document.getElementById("txtIdEdad").value;

	if(edad <13){ 
		mensaje = "Feliz dia";
	}
	else 
	{
		if (edad < 18) {
			mensaje = "usted es adolecente";
			if (edad ==17){
				mensaje= mensaje + " ultimo año";

			}
		}
        else
		 {
			mensaje = "tenes edad de laburar";

			if (edad == 33)
			{
				mensaje = mensaje + " como cristo";
			}	
			else {
				if (edad > 60) {
					mensaje = "A jubilarse";
					if (edad == 88) {
						mensaje = mensaje + " lindo numero";
					}
				}
			}
		
		}
			
		
			
	}
	if (edad % 2== 0) {
		mensaje = mensaje + " sos par";
	}
    alert(mensaje);
}
