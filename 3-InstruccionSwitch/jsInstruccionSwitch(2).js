function mostrar()
{
//tomo la edad  
var mes= document.getElementById('mes').value;

switch(mes)
{
    case "Enero" :
    case "Febrero" :
    case "Marzo" : 
    case "Abril" :
    case "Mayo" :
    case "Junio" :
    alert("falta para el invierno");
    break;

    case "Septiembre":
    case "Octubre" :
    case "Noviembre":
    case "Diciembre" :
    alert("Hace calor");
    break;

   
    case "Julio" :  
    case "Agosto" :
    alert("Abrigate");
    break;

}




}//FIN DE LA FUNCIÓN