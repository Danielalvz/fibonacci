// El factorial de un número entero positivo se define como el producto de todos los números naturales anteriores o iguales a él.
let inputNumero = document.getElementById("inputNumero");
let btnConvertir = document.querySelector(".btnConvertir");
let resultadosDiv = document.getElementById("resultados");

btnConvertir.addEventListener("click", construirFibonacci);

function construirFibonacci() {
    let numero = parseInt(inputNumero.value);

    // Limpiar el contenido previo
    resultadosDiv.innerHTML = "";

    let fibonacciSeries = [0, 1];
    
    for (let i = 2; i < numero; i++) {
        fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
      }

    if (isNaN(numero) || numero === "") {
        resultadosDiv.innerHTML = "<p>Ingresa un número válido</p>";
    } else if(numero < 0) {
        resultadosDiv.innerHTML = "<p>Ingresa un número positivo</p>";
    } else {
        resultadosDiv.innerHTML += `<p>Serie fibonacci ${fibonacciSeries.join(', ')}</p>`;
    }
}