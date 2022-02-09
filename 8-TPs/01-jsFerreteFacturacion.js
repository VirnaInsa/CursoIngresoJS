/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*///txtIdPrecioUno txtIdPrecioDos txtIdPrecioTres
function Sumar () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var sumaTotal;
    
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    sumaTotal = precioUno + precioDos + precioTres;

    alert("La suma total es " + sumaTotal);
}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var promedioTotal;
    
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    promedioTotal = (precioUno + precioDos + precioTres) / 3;

    alert("El promedio total de la suma es " + promedioTotal);
}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var preciofinal;
    
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    preciofinal = (precioUno + precioDos + precioTres) * 1.21;
    alert("El precio final es " + preciofinal);
}