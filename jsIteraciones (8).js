function mostrar()
{
	var respuesta;
	var numero;
	var acumulador = 0;
	var acumulador2 = 1;
	var flag = 0; // ponga una bandera para ver si entro a un blque de codigo
	
	
do 
{
 numero = parseInt(prompt("Ponga su numero"));

 if (numero >= 0)
		{
			
			acumulador += numero;
		}
 else 
		{
			
			acumulador2  *= numero;
			flag = 1;
			
		}
		
		respuesta = prompt("Quiere seguir ingresando numeros?");
}while(respuesta == "si");

if ( flag == 0)
{
	acumulador2 = 0;
}

document.getElementById('suma').value=acumulador;
document.getElementById('producto').value=acumulador2;

}//FIN DE LA FUNCIÓNe