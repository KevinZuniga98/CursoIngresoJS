function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch( mesDelAño) // switch( variable, nunca va ninguna condicion)
{
    case "Enero" :
    {
       alert("Es Enero");
       break; // palabra reservada, la unica forma para que se cierre el switch si es el case, y no se ejecuan las demas lineas
    }
    case "Marzo" :
    {
       alert("Marzo");
       break;
    }
    case "Julio" :
    {
       alert("Julio");
       break;
    }
    case "Diciembre" :
    {
       alert("Diciembre");
       break;
    }
    
}



}//FIN DE LA FUNCIÓN