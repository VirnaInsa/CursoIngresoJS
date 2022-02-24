
/*Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10". */
function mostrar()
{
    var primerNumero;
    var segundoNumero;
    var mensaje;
    var resta;
    var suma;

    primerNumero = parseInt(prompt("Ingrese el primer Número"));
    segundoNumero = parseInt(prompt("Ingrese el segundo nuúmero"));

    if (primerNumero == segundoNumero) {
        mensaje = "El primer número: "+ primerNumero + " El segundo es : " + segundoNumero;
    }
    else if (primerNumero > segundoNumero) {
        resta = primerNumero - segundoNumero;
        mensaje = "La resta es : " + resta;
    }else {
        suma = primerNumero + segundoNumero;
        mensaje = "La suma es : " + suma;

        if (suma > 10) {
            mensaje = "La suma es " + suma + " y supero el 10";
        }
    }
    alert(mensaje);


}
