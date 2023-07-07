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

function imprimirPalabra(palabra, cantidad) {
  for (var i = 0; i < cantidad; i++) {
    console.log(palabra);
  }
}

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
let miArray = [1, 2, 3, 4, 5];

function imprimirArray(miArray) {
  for (let i = 0; i < miArray.length; i++) {
    console.log(miArray[i]);
  }
}

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
let Array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imprimirArrayExceptoQuinto(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i !== 4) {
      console.log(arr[i]);
    }
  }
}

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

let array5 = [1, 2, 3, 4, 5];
let numeroparametro = 2;

function multiplearraynumber(arr, numero) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * numero);
  }
}
