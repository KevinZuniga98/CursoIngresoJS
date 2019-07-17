function mostrar()
{

var sexo = prompt("ingrese f ó m .");
    sexo = sexo.toLowerCase();


    while ( sexo != "f"  && sexo != "m" )
{
    alert("Sexo erroneo");
    sexo = prompt("Ingrese de vuelta su sexo");
    sexo = sexo.toLowerCase();
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN