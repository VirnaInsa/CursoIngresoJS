function mostrar()
{
	var nota;

	nota = Math.floor( Math.random() * 10 ) + 1;

	if(nota>8){
		alert("Excelente");

	}
	else{
		if(nota>3){
		alert("Aprobó");

	    }
	    else {
		alert("Vamos, la proxima se puede");
	    }
	}

	console.log(nota);
}//FIN DE LA FUNCIÓN