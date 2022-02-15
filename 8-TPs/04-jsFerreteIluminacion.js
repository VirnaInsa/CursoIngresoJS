/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidadLampara;
 	let precio;
    let precioTotal;
    let marcaLampara;
  
    precio = 35

    cantidadLampara = document.getElementById("txtIdCantidad").value;
    marcaLampara = document.getElementById("Marca").value;
    cantidadLampara = parseInt(cantidadLampara);
    precioTotal = 0

    if(cantidadLampara>5)
    {
       precioTotal = cantidadLampara* precio * 0.5;
       
    }
    else 
    {
        precioTotal= cantidadLampara* precio ;
        
    }
    if (cantidadLampara == 5) {
        if (marcaLampara == "ArgentinaLuz") {
            precioTotal = cantidadLampara * precio * 0.6;
        }
        else {
            precioTotal = cantidadLampara * precio * 0.7;
        }
        
    }
    if (cantidadLampara == 4) {
        if (marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas") {
            precioTotal = cantidadLampara * precio * 0.75;
        }
        else {
            precioTotal = cantidadLampara * precio * 0.8;

        }
    }
    if (cantidadLampara == 3) {
        if (marcaLampara == "ArgentinaLuz") {
            precioTotal = cantidadLampara * precio * 0.85;
        }
        else {
            if (marcaLampara == "FelipeLamparas") {
                precioTotal = cantidadLampara * precio * 0.9;
            }
            else { 
                precioTotal = cantidadLampara * precio * 0.95;
            }
        }
    }

    if (precioTotal > 120) {
        alert("IIBB Usted pago " + precioTotal * 0.10);
         
        precioTotal = precioTotal * 1.10;
         
    }
    
    precioTotal = precioTotal.toFixed(2);
    
    document.getElementById("txtIdprecioDescuento").value= precioTotal;
}
