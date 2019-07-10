function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

/* operadores Logicos
   OR  (||) = O
   AND (&&) = Y
   NOT (!) = transforma V en F y F en V, se ejecuta asi ! ("""")
*/   

if(edad >=13 && edad <= 17)
{
    alert("Sos adolescente");
}

}//FIN DE LA FUNCIÓN