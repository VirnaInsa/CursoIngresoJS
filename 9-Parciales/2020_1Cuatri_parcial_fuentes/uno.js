/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	









	
}






/*function mostrar()
{
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var contadorBarbijo =0;
	var contadorAlcohol= 0;
	var contadorJabon=0;
	var acumuladorbarbijo= 0;
	var acumuladorAlcohol= 0;
	var acumuladorJabon =0;
	var preioAlcoholBarato;
	var cantidadAlcoholBarato
	var fabricanteAlcoholBarato;
	var promediocompra;
	var mayorTipo;
	var flagAlcohol = 0;
	var mensajeAlcohol = "No se compraron alcoholes";
	var mensajeBarbijo;
	var mensajeJabon;

	while (repeticion < 3) {
		tipo = prompt('Ingrese tipo "barbijo", "jabón" o "alcohol": ')
	
	while (tipo != "barbijo" && tipo != "jabón" && tipo != "alcohol") {
		tipo = prompt('Ingrese tipo "barbijo", "jabón" o "alcohol": ')
	}
	precio= prompt("ingrese precio $(200-300)");
	precio= parseFloat(precio);
	while (!(precio >=100 && precio <= 300 )) {
		precio= prompt("Error. ingrese precio $(200-300)");
	    precio= parseFloat(precio);
	}
	precio= prompt("ingrese cantidad máx 1000");
	precio= parseFloat(precio);
	while (!(cantidad >0 && cantidad <= 1000)) {
		precio= prompt("Error. ingrese el máximo 1000");
	    precio= parseFloat(precio);
	}
	marca = prompt ("Ingrese marca:")
	fabricante = prompt("Ingrese fabricante :")
	switch (tipo) {
		case "alcohol":

            acumuladorAlcohol= acumuladorAlcohol +cantidad;		
			contadorAlcohol++;

			if (flagAlcohol == 0 || preioAlcoholBarato > precio) {
				preioAlcoholBarato = precio;
				cantidadAlcoholBarato = cantidad;
				fabricanteAlcoholBarato = fabricante;
				flagAlcohol = 1;
			}

			break;
		case "barbijo":
			acumuladorbarbijo= acumuladorbarbijo + cantidad;
			contadorBarbijo++;



			break;
		case "jabon":
			acumuladorJabon = acumuladorJabon + cantidad;
			contadorJabon++;
			break;
			
	
	}
    }
	if (acumuladorAlcohol > acumuladorbarbijo && acumuladorAlcohol > acumuladorJabon) {
		mayorTipo = "alcohol";
		promediocompra = acumuladorAlcohol / contadorAlcohol;
	}
	else if (acumuladorJabon> acumuladorbarbijo && acumuladorJabon>= acumuladorAlcohol) {
		mayorTipo = "jabon";
		promediocompra = acumuladorJabon / contadorJabon;
	}
	else{
		mayorTipo = "barbijo"
		promediocompra = acumuladorbarbijo / contadorBarbijo;

	}


	if (flagAlcohol == 0) {
		mensajeAlcohol = "A-Fabricante alcohol barato: " + fabricanteAlcoholBarato + 
		"/nCantidad: " + cantidadAlcoholBarato +
		"/nPrecio: " + preioAlcoholBarato;
	}

	mensajeBarbijo = "B- Tipo con mas unidades: " + mayorTipo + " Promedio: " + promediocompra;
	mensajeJabon = "C- Unidades de jabon: " + acumuladorJabon;

	alert(mensajeAlcohol + "/n" + mensajeBarbijo + "/n" + mensajeJabon);
}*/
/* 
var repeticion;
	var tipoDeProducto;
	var precio;
	var unidades;
	var marca;
	var fabricante;
	var alcoholMasBarato;
	var cantidadAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var bandera;
	var cantidadDeAlcohol = 0;
	var cantidadDeJabon = 0;
	var cantidadDeBarbijo = 0;
	var contadorAlcohol = 0;
	var contadorBarbijo = 0;
	var contadorJabon = 0;
	var mensaje = "";

	bandera = false;
	
	repeticion = 0;

	while (repeticion < 3) {
		
		tipoDeProducto = prompt("Ingrese tipo de producto: "); 
		while(tipoDeProducto != "barbijo" && tipoDeProducto != "jabón" && tipoDeProducto != "alcohol") 
		{
			tipoDeProducto = prompt("Error. Ingrese tipo de artículo: ");
		}
		precio = prompt("Ingrese un precio: ");
		precio = parseFloat(precio);
		while (precio < 100 || precio > 300) 
		{
			precio = prompt("Error. Ingrese un precio: ");
			precio = parseFloat(precio);		
		}
		unidades = prompt("Ingrese la cantidad de unidades: ");
		unidades = parseInt(unidades);
		while (unidades < 1 || unidades > 1000) 
		{
			unidades = prompt("Error. Ingrese la cantidad de unidades: ");
			unidades = parseInt(unidades);
		}

		marca = prompt("Ingrese la marca: ");
		fabricante = prompt("Ingrese el fabricante: ");
		console.log(tipoDeProducto, precio, unidades, marca, fabricante);

		if (tipoDeProducto == "alcohol" && bandera == false) 
		{
			alcoholMasBarato = precio;
			fabricanteAlcoholMasBarato = fabricante;
			cantidadAlcoholMasBarato = unidades;
			bandera = true			
		}
		else if(tipoDeProducto == "alcohol" && precio < alcoholMasBarato) 
		{
			alcoholMasBarato = precio;
			fabricanteAlcoholMasBarato = fabricante;
			cantidadAlcoholMasBarato = unidades;
		}

		switch (tipoDeProducto) 
		{
			case "barbijo":
				cantidadDeBarbijo += unidades;
				contadorBarbijo++;
				break; 
			case "jabón":
				cantidadDeJabon += unidades;
				contadorJabon++;
				break; 
			case "alcohol":
				cantidadDeAlcohol += unidades;
				contadorAlcohol++;
				break;	
		}
		
		repeticion++;
		
	}
	if (cantidadDeAlcohol > cantidadDeBarbijo && cantidadDeAlcohol > cantidadDeJabon) 
		{
			mayorTipo = "alcohol";
			promedio = cantidadDeAlcohol / contadorAlcohol;
		}
		else if (cantidadDeBarbijo > cantidadDeAlcohol && cantidadDeBarbijo > cantidadDeJabon) 
		{
			mayorTipo = "barbijo";
			promedio = cantidadDeBarbijo / contadorBarbijo;
		}
		else 
		{
			mayorTipo = "jabón";
			promedio = cantidadDeJabon / contadorJabon;
		}
	mensaje += "El alcohol más barato es " + fabricanteAlcoholMasBarato + "<br>";
	mensaje += " La cantidad es " + cantidadAlcoholMasBarato + "<br>";
	mensaje += "El tipo con más unidades es " + mayorTipo + " y el promedio por compra es " + promedio + "<br>";
	mensaje += "La cantidad de jabón es " + cantidadDeJabon; 

	document.write(mensaje)*/
