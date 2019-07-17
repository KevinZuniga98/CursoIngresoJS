function mostrar()
{
	var respuesta= "si";

	var numero;
	var contador=0;
	var acumulador=0;
	

while (respuesta == "si")	
{
 numero = parseInt(prompt("Ponga su numero"));
 acumulador += numero;
 
 respuesta = prompt("Quiere seguir ingresando numeros?");
 
 contador ++

}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN