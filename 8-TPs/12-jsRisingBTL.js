/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso (){
	//definicion de variables
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
   let sueldoIngresado;
   let numeroDeLegajo;
   let nacionalidadIngresada;

   edadIngresada = 0;
   sueldoIngresado = 0;
   numeroDeLegajo = 0;
   estadoCivilIngresado = 0;

   //A
   while(edadIngresada < 18 || edadIngresada > 90){
	   edadIngresada = prompt("Ingrese la edad (Entre 18 y 90):");
	   edadIngresada = parseInt(edadIngresada);
   }

   //B
   while(sexoIngresado != "m" && sexoIngresado != "f"){
	   sexoIngresado = prompt("Ingrese su sexo (f/m):");
   }

   //C
   while(estadoCivilIngresado < 1 || estadoCivilIngresado > 4){
	   alert("Ingrese su estado civil")
	   estadoCivilIngresado = prompt("1.Soltero - 2.Casado - 3.Divorciado - 4.Viudo");
   }

   //D
   while(sueldoIngresado < 8000){
	   sueldoIngresado = prompt("Ingrese su sueldo (no menor a 8000):");
   }

   //E
   while(numeroDeLegajo < 1000 || numeroDeLegajo > 9999){
	   numeroDeLegajo = prompt("Ingrese su número de legajo (numero de 4 cifras):");
   }

   //F
   while(nacionalidadIngresada != "a" && nacionalidadIngresada != "e" && nacionalidadIngresada != "n"){
	   alert("Ingrese su nacionalidad");
	   nacionalidadIngresada = prompt("a.argentinos - e.extranjeros - n.nacionalizados");
   }


   document.getElementById('txtIdEdad').value = edadIngresada;
   document.getElementById('txtIdSexo').value = sexoIngresado;
   document.getElementById('txtIdEstadoCivil').value = estadoCivilIngresado;
   document.getElementById('txtIdSueldo').value = sueldoIngresado;
   document.getElementById('txtIdLegajo').value = numeroDeLegajo;
   document.getElementById('txtIdNacionalidad').value = nacionalidadIngresada;
}
