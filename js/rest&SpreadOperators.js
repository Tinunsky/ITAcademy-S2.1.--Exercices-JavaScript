// Ejercicio 1
// Operador Spread en Arrays: Crea dos arrays, array1 y array2. Utiliza el operador spread para crear una
// tercera array que contenga todos los elementos de array1 y array2.

function concatArray(array1, array2) {
  const array3 = [...array1, ...array2];
  console.log(array3);
}

const miArray1 = [1, 2, 3, 4];
const miArray2 = [5, 6, 7, 8];

concatArray(miArray1, miArray2);

// Ejercicio 2
// Operador Resto en Funciones: Crea una función 'suma' que utilice el operador resto para aceptar un número
// indeterminado de argumentos y devolver su suma.

function suma(...numeros) {
  let sum = 0;

  numeros.map((numero) => {                          //   for (let numero of numeros) {
    sum += numero;
  });
  return `La suma de un numero indeterminado de argumentos es: ${sum}`;
}

console.log(suma(5, 9, 77));

// Ejercicio 3
// Copiando objetos con Spread: Crea un objeto 'objeto1'. Después crea un segundo objeto, 'object2', que sea
// una copia de 'object1' utilizando el operador spread. Cambia una propiedad de 'objecte2' y comprueba que
// 'object1' no ha cambiado.

let objeto1 = {
  name: "Khrys",
  surname: "Kozak",
  course: "React",
};

const objeto2 = { ...objeto1 };
console.log("Objeto 2: ", objeto2);

objeto2.name = "Khrystsina";

console.log("Objeto2 modificado: ", objeto2);
console.log("Comprueba de objeto1: ", objeto1);

// Ejercicio 4
// Resto en Destructuring: Crea un array con varios elementos. Utiliza destructuring y el operador resto para
// asignar los primeros dos elementos a variables, y después asignar el resto de los elementos a una tercera
// variable.

const myBio = ["Khrystsina", "Kozak", 677841364, "Barcelona"];

const [firstName, lastName, ...otherInfo] = myBio;

console.log("Destructuring. Firstname:", firstName);
console.log("Destructuring. Lastname:", lastName);
console.log("Destructuring. Rest info:", otherInfo);

// Ejercicio 5
// Spread en Funciones: Crea una función que acepte tres argumentos. Después, crea un array con tres elementos
// y llama a la función utilizando el operador spread con esa array.

function myFunction(arg1, arg2, arg3) {
  console.log("Argumento 1:", arg1);
  console.log("Argumento 2:", arg2);
  console.log("Argumento 3:", arg3);
}

const myArray = ["uno", "dos", "tres"];
myFunction(...myArray);

// Ejercicio 6
// Fusionando Objetos con Spread: Crea dos objetos con propiedades distintas. Utiliza el operador spread para
// fusionar estos dos objetos en uno nuevo.

const gato1 = {
  nombre: "Nihan",
  raca: "europea",
  edad: 5,
};

const gato2 = {
  color: "tricolor",
  ojos: "verdes",
  fechaNacimiento: 2017,
};

const gatoFullInfo = { ...gato1, ...gato2 };
console.log("Fusionando Objetos:", gatoFullInfo);
