/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;  
	
	numeroIngresado = prompt(" Ingrese un numero del 0 al 9");  

	while (!(numeroIngresado >=0 && numeroIngresado <=9))
	{
		numeroIngresado = prompt(" Ingrese un numero correcto");  
    
	}
    
	document.getElementById("txtIdNumero").value =numeroIngresado 
}//FIN DE LA FUNCIÓN