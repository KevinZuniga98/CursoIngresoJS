function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mes)
{
    case "Enero" :
    case "Febrero" :
    case "Marzo" : 
    case "Abril" :
    case "Mayo" :
    case "Junio" :
    case "Septiembre":
    case "Octubre" :
    case "Noviembre":
    case "Diciembre" :
    case "Julio" :  
    case "Agosto" :
     alert("Este mes no tiene 29 dias");
    break;

    default : // linea que se ejecuta si no se dan los demas CASE
    alert("Tiene 29 dias");

}
	


}//FIN DE LA FUNCIÓN