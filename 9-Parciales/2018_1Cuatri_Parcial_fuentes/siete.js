/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) 
, el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6. */

function mostrar()
{
    var nota;
    var sexo;
    var promedioNota;
    var notaBaja;
    var sumaNotas = 0;
    var i = 0;
    var flag = 0;
    var sexoMenor;
    //var mensaje;
    var contadorVaron = 0;

    do {

        nota = parseInt(prompt("Ingrese la nota"));

        while (!(nota>= 0 && nota <= 10 )) {

            nota = parseInt(prompt("Error. Ingrese la nota correcta"));
        
        }

        sexo = prompt("Ingrese el sexo");

        while (sexo!= "f" && sexo != "m" ) {

            sexo = prompt("Error. Ingrese el sexo correcto");

        }
        if (flag == 0 || nota < notaBaja) {
            notaBaja = nota;
            sexoMenor = sexo;
            //mensaje= "La nota más baja es " + nota + " y el sexo es " + sexo;
            flag = 1;
            
           
        }
        if (sexo == "m" && nota >= 6) {
            contadorVaron++;
            //mensaje = "la cantidad de varones con nota mayor es " + contadorVaron;
        }

        sumaNotas = sumaNotas + nota;

        i++;



    } while (i < 5);

    promedioNota = sumaNotas/5;

    var mensaje = "El promedio de la nota es: "+ promedioNota +  "\n" +
     "La nota más baja es: " + notaBaja + " y el sexo es " + sexoMenor +"\n"+ 
     "La cantidad de varones con nota mayor a 6 es: " + contadorVaron;
    alert(mensaje);
    
    //alert(promedioNota);
    

    

}
