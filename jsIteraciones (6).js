function mostrar()
{
    var numero;
	var contador=1;
	var suma = 0;

while (contador <= 5)
{
	numero = parseInt(prompt("Ingrese un numero :"));
	suma += numero;

	contador ++;
}

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/5;

}//FIN DE LA FUNCIÓN