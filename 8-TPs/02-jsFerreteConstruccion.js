/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
function Rectangulo () 
{
    var largoRectangulo;
    var anchoRectangulo;
    var alambreRectangulo;
    var perimetroDelTerreno;

    largoRectangulo = document.getElementById("txtIdLargo").value;
    anchoRectangulo = document.getElementById("txtIdAncho").value;

    largoRectangulo = parseFloat(largoRectangulo);
    anchoRectangulo = parseFloat(anchoRectangulo);

    perimetroDelTerreno = (anchoRectangulo + largoRectangulo) * 2;
    alambreRectangulo = perimetroDelTerreno * 3;

    alert("La cantidad de alambre a comprar es " + alambreRectangulo);
}

function Circulo () 
{
    var radioCirculo;
    var perimetroCirculo;	
    var vueltaAlambre;
    var cantidadAlambre;
    var mensaje;

    vueltaAlambre = 3
    
    radioCirculo = document.getElementById("txtIdRadio").value;
    radioCirculo = parseFloat(radioCirculo);

    perimetroCirculo = 2 * Math.PI * radioCirculo;
    cantidadAlambre = perimetroCirculo * vueltaAlambre;

    mensaje = "La cantidad total es " + cantidadAlambre.toFixed();

    alert(mensaje);

}

function Materiales () 
{
    var largoRectangulo;
    var anchoRectangulo;
    var areaRectangulo;
    var bolsasCemento;
    var bolsasCal;
    var metrosCuadradosCemento;
    var metrosCuadradosCAl;

    metrosCuadradosCemento = 2;
    metrosCuadradosCAl = 3;

	largoRectangulo = document.getElementById("txtIdLargo").value;
    anchoRectangulo = document.getElementById("txtIdAncho").value;

    largoRectangulo = parseFloat(largoRectangulo);
    anchoRectangulo = parseFloat(anchoRectangulo);

    areaRectangulo = anchoRectangulo * largoRectangulo;

    bolsasCemento = areaRectangulo * metrosCuadradosCemento;
    bolsasCal = areaRectangulo * metrosCuadradosCAl;

    mensaje = "la cantidad de bolsas de cemento a comprar son " + bolsasCemento; 
    mensaje += " y la cantidad de bolsas de cal a comprar son " + bolsasCal;

    alert(mensaje);


}
