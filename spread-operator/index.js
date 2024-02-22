

/**
 * Example 4
 * Para pasarle las propiedades al constructor no podemos hacerlo como array el operador spread nos ayuda a esto
 *
 */

/*
const paramsConstructor = [1970, 0, 1];  // 1 Jan 1970
let myDay = new Date(...paramsConstructor);
console.log(myDay);
 */



// RESUELVE EJERCICIOS

// ## Ejercicio 1: Fusionando dos arreglos

// Dado los dos siguientes arreglos:

const alphabet1 = ['A', 'B', 'C'];
const alphabet2 = ['D', 'E', 'F'];
const allAlphabet = [ ...alphabet1, ...alphabet2];
console.log(allAlphabet);


// ## Ejercicio 2: Agregando elementos a un objeto

// Dado el objeto original:

const originalObject = {name: 'John', age: 25};

const objectWithProfession = { ...originalObject, profession: "Engineer"}
console.log(objectWithProfession);


// ## Ejercicio 3: Funciones y argumentos

// Crea una función que acepte cualquier número de argumentos, utiliza el operador de propagación para convertir esos argumentos en un arreglo dentro de la función, después imprime cada elemento

const myfunction = (...params) => {
    console.log(params);
};

myfunction(1,'string', true);


// ## Ejercicio 4: Copiando arreglos

// Dado el siguiente arreglo:

const numbers = [1, 2, 3, 4, 5];
const numbersCloned = [...numbers];

console.log(numbers)
console.log(numbersCloned)

//Crea una copia exacta de este arreglo utilizando el operador de propagación.

// ## Ejercicio 5: Encontrando el número máximo

// Dado el siguiente arreglo de números:

const numeros = [45, 89, 32, 1, 4, 67];

console.log(Math.max(...numeros));