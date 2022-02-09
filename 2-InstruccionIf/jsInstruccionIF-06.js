function mostrar()
{
	var edad;

	edad= document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >=18){
		alert("Es mayor de edad");

	}
	else 
	    {if(edad <=17){
		alert("Es adolecente");

	}
	    else {
		alert("Es niño");
	}
}



}//FIN DE LA FUNCIÓN