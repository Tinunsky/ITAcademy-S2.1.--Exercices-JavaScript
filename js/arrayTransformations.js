// Ejercicio 1
// Map: Tiene un array de números [1, 2, 3, 4]. Crea un nuevo array que contenga el cuadrado de cada número.

const arrayNum = [1, 2, 3, 4];
const numCuadrado = arrayNum.map((numero) => numero ** 2);

console.log("Array con numeros cuandrados:", numCuadrado);

// Ejercicio 2
// Filtero: Tiene un array de números [1, 2, 3, 4]. Crea un nuevo array que sólo contenga los números pares.

const arrayNumbers = [1, 2, 3, 4];
const arrayNumPares = arrayNumbers.filter((numero) => numero % 2 == 0);

console.log("Array con numeros pares:", arrayNumPares);

// Ejercicio 3
// Find: Tiene un array de números [1, 10 , 8, 11]. Use la función find para encontrar el primer número que
// es mayor a 10.

const arrayDeNumeros = [1, 10, 8, 11];
const numMayorADiez = arrayDeNumeros.find((number) => number > 10);

console.log("El primer número mayor a 10:", numMayorADiez);

// Ejercicio 4
// Reducción: Tiene un array de números [13, 7, 8, 21]. Utiliza la función reduccion para calcular la suma
// total de los números.

const numbers = [13, 7, 8, 21];
const sumaTotal = numbers.reduce(
  (accumulator, number) => accumulator + number,
  0
);

console.log("La suma total de los números es:", sumaTotal);

// Ejercicio 5
// Dado un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una función en una sola línea que haga lo
// siguiente:
// - Filtra los números mayores o iguales a 10.
// - Multiplica cada número filtrado por 2.
// - Calcula la suma de los números filtrados y multiplicados por 2.
// - La función debe devolver el resultado de la suma.

const arrayOriginal = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const sumaDeNumero = arrayOriginal
  .filter((element) => element >= 10)
  .map((element) => element * 2)
  .reduce((accumulator, numero) => accumulator + numero, 0);

console.log(
  "La suma de los números filtrados y multiplicados por 2:",
  sumaDeNumero
);

// Ejercicio 6
// Every / Some: Usa every y some para determinar si todos o algunos de los elementos del
// array [11, 12, 13, 14] son ​​mayores que 10, respectivamente

const arrayOfNumbers = [11, 12, 13, 14];

const todosMayoreQue10 = arrayOfNumbers.every((element) => element > 10);
const algunosMayorQue10 = arrayOfNumbers.some((element) => element > 10);

console.log("Cada elemento de array es mayor que 10?:", todosMayoreQue10);
console.log("Alguno elemento de array es mayor que 10?:", algunosMayorQue10);
