// Ejercicio 1
// Callback básico: Escribe una función llamada procesar que acepte dos parámetros: un número y una función
// de callback. La función procesar debe invocar la función de callback, pasando el número como parámetro.

function procesar(num, callback) {
  callback(num);
}

function miCallback(number) {
  console.log("El numero es " + number);
}

procesar(5, miCallback);

// Ejercicio 2
// Callbacks con operaciones matemáticas: Escribe una función calculadora que acepte tres parámetros: dos
// números y una función de callback. La función calculadora debe invocar la función de callback con los dos
// números como parámetros. Luego, llama calculadora con una función que realice la suma de los dos números.

function calculadora(num1, num2, callback) {
  const sum = num1 + num2;
  callback(sum);
}

function miCallback(valor) {
  console.log(`La suma de los numeros es ${valor}`);
}

calculadora(7, 7, miCallback);

// Ejercicio 3
// Uso de callbacks en funciones asíncronas: Escribe una función esperarISaludar que acepte dos parámetros:
// un nombre y una función de callback. La función debe esperar 2 segundos y entonces invocar la función de
// callback, pasando el nombre como parámetro.

function esperarISaludar(nombre, callback) {
  setTimeout(function () {
    callback(nombre);
  }, 2000); // 2 segundos = 2000 milisegundos
}

function saludar(nombre) {
  console.log(`Saludo con retraso de 2s: Hola, ${nombre}!`);
}

esperarISaludar("Khrys", saludar);

// Ejercicio 4
// Callbacks con arrays: Escribe una función procesarElements que acepte dos parámetros: un array y una
// función de callback. La función procesarElements debe invocar la función de callback para cada elemento
// del array.

function procesarElements(array, callback) {
  for (i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function imprimirElemento(elemento) {
  console.log(`Imprimo cada elemento del array: ${elemento}`);
}

const miArray = [5, 4, 77];

procesarElements(miArray, imprimirElemento);

// Ejercicio 5
// Escribe una función procesarCadena que acepte dos parámetros: una cadena de caracteres y una función de
// callback. La función procesarCadena debe convertir la cadena a mayúsculas y entonces invocar la función de
// callback con la cadena transformada.

function procesarCadena(cadena, callback) {
  const cadenaAMayusculas = cadena.toUpperCase();
  callback(cadenaAMayusculas);
}

function imprimirCadenaAMayusculas(frase) {
  console.log(`Cadena a mayúsculas: ${frase}`);
}

const miCadena = "Quiro hacer un backflip!";
procesarCadena(miCadena, imprimirCadenaAMayusculas);
