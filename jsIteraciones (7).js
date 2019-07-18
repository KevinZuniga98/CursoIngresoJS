function mostrar()
{
	var respuesta;
	var numero;
	var contador=0;
	var acumulador=0;
	
do 	
{
 numero = parseInt(prompt("Ponga su numero"));
     while(isNan(numero)){
		 alert("no es un numero");
		 numero = parseInt(prompt("Ponga su numero"));
	 }
 


 acumulador += numero;

 
 respuesta = prompt("Quiere seguir ingresando numeros?");
 respuesta = respuesta.toLowerCase();
 
 
 contador ++;

} while (respuesta == "si");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN