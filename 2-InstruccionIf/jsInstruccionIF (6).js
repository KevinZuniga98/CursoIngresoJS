function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

// Secuencia : IF - ELSE {IF - ELSE{IF - ETC}}

if(edad < 13)
{
  alert("es niño");
}

else 
{
    if ( edad <18) // ya descarte los numeros menores al 13 
    {
        alert ("es adolescente")
    }
    
    else
    {
        alert (" es adulto")
    }
}

/* Otra forma
if(edad < 13)
{
  alert("es niño");
}

else if ( edad <18) // ya descarte los numeros menores al 13 
    {
        alert ("es adolescente")
    }
    
    else if (edad <= 70)
    {
        alert (" es adulto")
    }
    else 
    {
        alert ("Es anciano")
    }
*/

}//FIN DE LA FUNCIÓN