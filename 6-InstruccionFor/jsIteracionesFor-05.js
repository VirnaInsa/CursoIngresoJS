function mostrar()
{
	var numero;

	for (i=0; ;i++) {
		numero= prompt("Ingrese un numero");
		numero = parseInt(numero);
		if (numero == 9) {
			break;
		}

		alert("Usted ingreso el número" + numero);
		
	}

}//FIN DE LA FUNCIÓN