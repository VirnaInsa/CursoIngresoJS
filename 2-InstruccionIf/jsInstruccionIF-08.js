function mostrar()
{
	var edad;
	var estadoCivil;

	estadoCivil= document.getElementById("estadoCivil").value;
	edad = document.getElementById("txtIdEdad").value;

	if(edad>17 && estadoCivil== "Soltero"){
		alert("Es soltero y no es menor");
	
	}
	
	


}//FIN DE LA FUNCIÓN