function mostrar()
{
	var numero;
	var nPositivo;
	var nNegativo;
	var respuesta = "si";
	var acumuladorDePositivos = 0;
	var acumuladorDeNegativos= 0;
	var promedioDePositivos;
	var promedioDeNegativos;
	var cantidadDePositivos;
	var cantidadDeNegativos;
	var numeroPar;
	var diferenciasPosYNeg;

	while (respuesta == "si")	
	{
		numero = parseInt(prompt("ingrese su numero"));
		

		if (numero > 0)
			{
				nPositivo = numero;
				acumuladorDePositivos += nPositivo;
				cantidadDePositivos ++ ;
				
				if ((numero % 2 ) == 0)
				{
					numeroPar ++;
				}
				promedio = cantidadDePositivos / acumuladorDePositivos;
			}
		else 	
		{
			nNegativo = numero;
			acumuladorDeNegativos += nNegativo;
			cantidadDeNegativos ++ ;
			
			if ((numero % 2 ) == 0)
			{
				numeroPar ++;
			}
			
			promedioDeNegativos = cantidadDeNegativos / acumuladorDeNegativos;
		}
		
		diferenciasPosYNeg = cantidadDePositivos - cantidadDeNegativos;
		respuesta = prompt("Quiere seguir ingresando numeros?");
		
	}
}//FIN DE LA FUNCIÓN