// Ejercicio 1
// Conversión de funciones: Tienes una función add que acepta dos parámetros y devuelve su suma. 
// Conviértela en una función de flecha. Por ejemplo:function add(a, b) {return a + b;}.

const add = (a,b) => a + b;
console.log("Suma de dos numeros:", add(5,3));

// Ejercicio 2
// Función de flecha sin parámetros: Crea una función de flecha llamada randomNumber que no necesite 
// parámetros y que devuelva un número aleatorio entre 0 y 100.

const randomNumber = () => Math.floor(Math.random() * 101);
console.log("Random numero de 0 a 100:", randomNumber());


// Ejercicio 3
// Uso de 'this' en las funciones de flecha: Crea una clase person que tenga una propiedad name 
// y una función greet que utilice una función de flecha. La función debe imprimir un saludo que incluya 
// el nombre de la persona. Por ejemplo: console.log(Hola, ${this.name});

class Person {
    constructor(name) {
        this.name = name;
        this.greet = () => {
            return `Hola, ${this.name}`
        };
    }
}

const person = new Person('Khrys');
console.log("Greeting de la persona:", person.greet());