// Ejercicio 1
// Creación de una Promesa: Crea una promesa que se resuelva después de 2 segundos y que devuelva la cadena de
// texto 'Hola, mundo'.

const miPromesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola, mundo");
  }, 2000);
});

// Ejercicio 2
// Utilización de una Promesa: Utiliza la promesa creada en el ejercicio anterior. Crea un .then que imprima
// el resultado en la consola.

miPromesa.then((resultado) => {
  console.log("Uso promise: ", resultado);
});

// Ejercicio 3
// Promesa con reject: Crea una promesa que se resuelva después de 2 segundos si el input es igual a Hola,
// y que la rechace si el input es cualquier otra cosa.

const miPromesa1 = (value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === "Hola") {
        resolve("La promesa se ha resuelto con exito");
      } else {
        reject("La promesa esta rechazada");
      }
    }, 2000);
  });

// Prueba de promesa con excito
miPromesa1("Hola")
  .then((result) => {
    console.log("Prueba 1:", result);
  })
  .catch((error) => {
    console.error(error);
  });

// Prueba de promesa rechazada
miPromesa1("Hello")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Prueba 2:", error);
  });

// Ejercicio 4
// Uso de async/await: Escribe una función asíncrona que utilice la función await para esperar el resultado
// de la promesa creada en el ejercicio 1, y que después imprima este resultado en la consola.

async function imprimirPromesa() {
  const result = await miPromesa;
  console.log("Promesa hecha con async/await:", result);
}

imprimirPromesa();

// Ejercicio 5
// Gestión de errores con async/await: Modifica la función del ejercicio 4 para que capture cualquier posible
// error utilizando un bloque try/catch.

async function imprimirPromesa2() {
  try {
    const result = await miPromesa;
    console.log("Promesa hecha con async/await y try/catch:", result);
  } catch (error) {
    console.error(error);
  }
}

imprimirPromesa2();

// Ejercicio 6
// Promise.all: Crea dos promesas que se resuelvan después de 2 y 3 segundos, respectivamente. Use
// Promise.all para esperar que ambas promesas se resuelvan, e imprime los resultados en la consola.

const myPromise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Aqui es la promesa 1.");
  }, 2000);
});

const myPromise4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Aqui es la promesa 2");
  }, 3000);
});

Promise.all([myPromise3, myPromise4]).then((results) => {
  console.log("Dos promesas imprimidos con Promise.all", results);
});
