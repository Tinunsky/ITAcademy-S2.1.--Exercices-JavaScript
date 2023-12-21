// Ejercicio 1
// forEach: Tiene un array de nombres. Utiliza forEach para imprimir cada nombre en la consola:

const nombres = ["Anna", "Bernat", "Clara"];

nombres.forEach((element) =>
  console.log("Imprimir nombres con forEach:", element)
);

// Ejercicio 2
// for-of: Tiene un array de nombres. Utiliza un bucle for-of para imprimir cada nombre en la consola:
// let nombres = ['Anna', 'Bernat', 'Clara'];

for (const element of nombres) {
  console.log("Imprimir nombres con for-of:", element);
}

// Ejercicio 3
// filtro: Tiene un array de números. Use filtro para crear una nueva array que sólo contenga los números pares.

const numeros1 = [1, 2, 3, 4, 5, 6];

const numerosEven = numeros1.filter((element) => element % 2 == 0);
console.log("Numero pares con filter:", numerosEven);

// Ejercicio 4
// for-in: Tiene un objeto con pares clave-valor.
// Use un bucle for-in para imprimir en la consola cada clave y su valor correspondiente.

const obj = {
  nombre: "Ona",
  edad: 25,
  ciudad: "Barcelona",
};

for (const property in obj) {
  console.log(
    `Imprimo cada propiedad con su valor: ${property}: ${obj[property]}`
  );
}

// Ejercicio 5
// for-of con break: Tiene un array de números. Utiliza un bucle for-of para imprimir en la consola los números
//  hasta encontrar el número 5, entonces detiene el bucle:

const numeros2 = [1, 2, 3, 4, 5, 6];

for (const numero of numeros2) {
  console.log(numero);

  if (numero == 5) {
    console.log("El numero 5 ya esta encontrado! Paramos la bucle.");
    break;
  }
}

// Ejercicio 6
// for-of con index: Utiliza un bucle for-of para imprimir en la consola cada elemento del array y su posición
// (index).

const arrayDeNombres = ["Anna", "Bernat", "Clara"];

for (const [index, nombre] of arrayDeNombres.entries()) {
  console.log(`Index: ${index}, Nombre: ${nombre} `);
}
