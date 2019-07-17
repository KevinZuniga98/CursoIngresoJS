function mostrar()
{
	var respuesta = "si";

	var numero;
	var suma=0;
	var multiplicacion=1;
	var acumulador = 0;
	var acumulador2 = 1;
	

while (respuesta == "si")	
{
 numero = parseInt(prompt("Ponga su numero"));
 
 if (numero >= 0)
		{
			
			acumulador =acumulador + numero;
		}
 else 
		{
			multiplicacion  = numero;
			acumulador2  *= numero;
			
		}
		
		respuesta = prompt("Quiere seguir ingresando numeros?");
}

document.getElementById('suma').value=acumulador;
document.getElementById('producto').value=acumulador2;

}//FIN DE LA FUNCIÓNe