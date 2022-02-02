/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var division;
	var resto;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;
	console.log(dividendo);
	console.log(divisor);

	division = dividendo / divisor;
	console.log(division)

	division = parseInt(division)
	console.log(division);

	resto= dividendo- (divisor*division);
	console.log(resto);

	alert("El resto es "+ resto);
}
