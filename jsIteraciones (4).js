function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	

	while (numero < 0 || numero >= 9 || isNaN(numero)) //isNaN(numero)= si es NO es un numero = da true o false
	{
		alert("Numero erroneo");
		numero =parseInt(prompt("Ingrese el nuevo nuevamente"));
	}
	
	document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN