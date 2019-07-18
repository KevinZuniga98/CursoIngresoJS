function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta;
	var numero;
	var numeroMinimo;
	var numeroMaximo;
	var flag = 0 ;

	do
	{
		numero = parseInt(prompt("Ingrese su numero"));
	    if (numero > numeroMaximo || flag == 0)
		{
			numeroMaximo = numero;
		}
	    
		if(numero < numeroMinimo || flag == 0)
		{
			numeroMinimo = numero;
			flag = 1;
		}
	
        respuesta =prompt("Quiere ingresar mas numeros?");
	}while(respuesta!='no');


	document.getElementById("minimo").value = numeroMinimo;
	document.getElementById("maximo").value = numeroMaximo;



}//FIN DE LA FUNCIÓN