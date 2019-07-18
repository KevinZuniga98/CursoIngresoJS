function mostrar()
{
	var numero;
	var respuesta;
	var numeroNegativo = 0;
	var numeroPositivo = 0;
	var numerosCeros = 0;
	var contadorNegativo = 0;
	var contadorPositivo = 0;
	var numerosPares = 0;
	var promedioNegativo;
	var promedioPositivo;
	var diferencia;

	do	
	{
	
		numero = parseInt(prompt("ingrese su numero"));
		
		if ( (numero % 2) == 0)
		{
			numerosPares ++;
		
		}
		if(numero == 0)
		{
         numerosCeros ++;
		}

	    else if (numero < 0)
		{
		numeroNegativo += numero;
		contadorNegativo ++;
		
		}
		
		else (numero > 0 )
		{
		numeroPositivo += numero;
		contadorPositivo ++;

		}

	   respuesta = prompt("Quiere seguir ingresando numeros?");
	   
	}while (respuesta == "si");
	
	promedioNegativo = numeroNegativo / contadorNegativo;
	promedioPositivo = numeroPositivo / contadorPositivo;

	diferencia = numeroPositivo - numeroNegativo;
		

	document.write("La suma de los negativos es : " + numeroNegativo + "<br>");
	document.write("La suma de los positivos es : " + numeroPositivo + "<br>");
	document.write("La cantidad de los negativos es : " + contadorNegativo + "<br>");
	document.write("La cantidad de los positivos es : " + contadorPositivo + "<br>");
	document.write("La cantidad de Ceros es  : " + numerosCeros + "<br>");
	document.write("La cantidad de numeros Pares es  : " + numerosPares + "<br>");
	document.write("El promedio de los numeros positivos es : " + promedioPositivo + "<br>");
	document.write("El promedio de los numeros negativos es : " + promedioNegativo + "<br>");
	document.write("La diferencia entre positivos y negativos es : " + diferencia + "<br>");

	// hacer el 1 , 2 , 3, 4

}//FIN DE LA FUNCIÓN