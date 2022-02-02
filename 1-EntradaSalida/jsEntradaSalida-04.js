/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var  nombreDeUsuario;
	nombreDeUsuario = prompt("por favor, ingrese su nombre");
	document.getElementById("txtIdNombre").value = nombreDeUsuario;
	
}

