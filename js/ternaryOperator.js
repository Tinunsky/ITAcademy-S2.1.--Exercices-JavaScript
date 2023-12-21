// Ejercicio 1
// Operador ternario básico: Escribe una función puedeConducir que acepte la edad como parámetro y 
// utilice el operador ternario para determinar si el usuario puede conducir. Si la edad es 18 o más, 
// debe devolver Puedes conducir. Si no, debe devolver 'No puedes conducir'.

function puedeConducir(edad) {
    return (edad >= 18) ? 'Puedes conducir' : 'No puedes conducir';
}

console.log("Mi edad es 32, puedo conducir? :", puedeConducir(32));

// Ejercicio 2
// Uso con operadores de comparación: Escribe una expresión que utilice el operador ternario para 
// determinar cuál de los dos números dados (num1 y num2) es mayor. Si num1 es mayor, devuelve 'num1 es mayor'. 
// Si no, devuelve 'num2 es mayor'.


const num1 = Math.floor(Math.random() * 101);
let num2;

do {
    num2 = Math.floor(Math.random() * 101); 
} while (num1 == num2);

function cualNumeroEsMayor(num1,num2) {
    return (num1 > num2) ? `${num1} es mayor` : `${num2} es mayor`;
}

console.log(`Cuál de los dos números dados (${num1} y ${num2}) es mayor? :`, cualNumeroEsMayor(num1,num2));


// Ejercicio 3
// Uso enlazado de operadores ternarios: Escribe una expresión que utilice enlaces de operadores ternarios 
// para determinar si un número es positivo, negativo o cero.

const number = Math.floor(Math.random() * 101) - 50;

const checkNumber = 
number > 0? 'Positivo' :
number < 0? 'Negativo' :
'Cero';

console.log(`Number ${number} is :`, checkNumber)

// Operador ternario con funciones: Crea una función encontrarMaximo que acepte tres parámetros (a, b, c) 
// y utilice el operador ternario para determinar el valor máximo.

const a = Math.floor(Math.random() * 101);
const b = Math.floor(Math.random() * 101);
const c = Math.floor(Math.random() * 101);

function encontrarMaximo(a, b, c,) {
    const maximum =  a > b ? ( a > c ? a : c ) :
    b > c? b : c;

    return maximum;
}

console.log(`El valor máximo de los a = ${a}, b = ${b}, c = ${c} sería:`, encontrarMaximo(a,b,c));


// Ejercicio 4
// Operador ternario dentro de un bucle: Escribe una función parOImpar que acepte un array de números y 
// utilice un bucle para recorrer el array. Dentro del bucle, utiliza el operador ternario para determinar
// si cada número es par o impar.

function parOImpar(array) {
    for (i = 0; i < array.length; i++) {
        const numParOImpar = (array[i] % 2 == 0) ? "par" : "impar";
        console.log(`${array[i]} es ${numParOImpar}`)
    }
}

const numeros = [5, 8, 9, 4];
parOImpar(numeros);