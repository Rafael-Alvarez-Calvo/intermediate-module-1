/**
 * Example 1
 * Podemos evitar hacer un push utilizando el operador spread para combinar dos arrays
 */

/*
const numbers = [1,2,3,4];
const otherNumber = [5,6,7];

const total = [
    ...numbers,
    ...otherNumber,
];

console.log(total);

 */

/**
 * Example 2
 * Podemos utilizar el operador spread para combinar objetos
 *
 */
/*
const objectNumber = {
    key1: 1,
    key2: 2,
};

const otherObjectNumber = {
    key3: 3,
    key4: 4,
};

const total = {
    ...objectNumber,
    ...otherObjectNumber,
};

console.log(total);

 */

/**
 * Example 3
 * Podemos utilizar operador spread cuando no sabemos cuantos parámetros en concreto va a recibir nuestra función
 */

/*
const myfunction = (...params) => {
    console.log(params);
};

myfunction(1,'string', true);

*/

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