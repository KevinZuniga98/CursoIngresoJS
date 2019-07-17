function mostrar()
{
    var numero;
	var contador=0;
	var acumulador=0;
	var promedio = 0;

while (contador < 5)	
{
 numero = parseInt(prompt("Ponga su numero"));
 acumulador += numero;
 promedio = acumulador / 5;
 
 contador ++
}

document.getElementById("suma").value = acumulador;
document.getElementById("promedio").value = promedio


}//FIN DE LA FUNCIÓN