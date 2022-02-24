/*Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y 
Venus están antes que la tierra).
Curso de ingreso UTN FRA */
function mostrar()
{
    var planeta;
    var mensaje;

    planeta = prompt("Ingrese un planeta del sistema solar");

    switch (planeta) {
        case "tierra":
            mensaje = "Acá vivimos"
                    
            break;
        case "mercurio": 
        case  "venus":
            mensaje = "Acá hace más calor";

            break;
        case "marte":
        case "júpiter":
        case "saturno":
        case "urano":
        case "neptuno":
            mensaje = "Acá hace más frio";

            break;
            
        default:
            mensaje = "No es un planeta valido";
            break;
    }

    alert(mensaje);

   

}
