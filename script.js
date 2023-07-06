//1-Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
function verificarParidad(numero) {
  var numero = Number(document.getElementById("numero").value);
  var resultado = document.getElementById("resultado");
  if (numero % 2 === 0) {
    console.log("El número " + numero + " es par.");
  } else {
    console.log("El número " + numero + " es impar.");
  }
}

//2-Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
function compararNumeros(num1, num2) {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2);
  } else if (num1 < num2) {
    console.log(num2 + " es mayor que " + num1);
  } else {
    console.log("Los números son iguales");
  }
}

//3-Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function multiplo5(number1) {
  if (number1 % 5 === 0) {
    console.log(number1 + "es multipo de 5");
  } else {
    console.log(number1 + "No es multiplo de 5");
  }
}

//4-Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
const imprimirNumeros = (numero) => {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
};

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
