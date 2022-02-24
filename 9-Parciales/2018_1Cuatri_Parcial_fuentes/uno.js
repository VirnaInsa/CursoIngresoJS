
function mostrar()
{
    
    var ancho;
    var largo;
    var perimetroRectangulo;

    ancho = prompt("Ingrese un número");
    largo = prompt("ingrse un número");

    ancho = parseFloat(ancho);
    largo = parseFloat(largo);
    
    perimetroRectangulo = 2 * largo + 2 * ancho;

    alert("El perimetro es " + perimetroRectangulo + "m");
    



}
