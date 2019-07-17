function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numero;
	var numeroMinimo=100000000000000000;
	var numeroMaximo=0 ;

	while(respuesta!='no')
	{
		numero = parseInt(prompt("Ingrese su numero"));
	  if (numero > numeroMaximo)
		{
			numeroMaximo = numero;
		}
	   else if (numero < numeroMinimo)
		{
			numeroMinimo = numero;
		}
        respuesta =prompt("Quiere ingresar mas numeros?");
	}


	document.getElementById("minimo").value = numeroMinimo;
	document.getElementById("maximo").value = numeroMaximo;



}//FIN DE LA FUNCIÓN