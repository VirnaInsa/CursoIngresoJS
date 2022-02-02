/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	suma=numeroUno +numeroDos;

	alert("La Suma es " +suma);

}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	resta=numeroUno - numeroDos;

	alert("La Resta es " +resta);

}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplica;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	multiplica =numeroUno * numeroDos;

	alert("La Multiplicacion es " +multiplica);

}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var divide;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	divide =numeroUno / numeroDos;

	alert("La Divicion es " +divide);

} 
