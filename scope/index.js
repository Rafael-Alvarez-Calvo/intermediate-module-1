// RESUELVE EJERCICIOS

var mensaje = "¡Hola, mundo!";
    
function saludo() {
    var mensaje = "¡Hola, function scope!";
    let mensaje2 = "¡Hola, function scope!";
    console.log(mensaje);
    console.log(mensaje2);
}

console.log(mensaje);
saludo();
console.log(mensaje);

// ¿Cuál será la salida al ejecutar este código? ¿Por qué?
// Output: "¡Hola, mundo!" "¡Hola, function scope!" "¡Hola, mundo!", 

// Ahora, intenta quitar la declaración var de la variable mensaje en la función saludo() y ejecútalo nuevamente. ¿Cómo cambia el resultado?
// Output: "¡Hola, mundo!" "¡Hola, function scope!" "¡Hola, mundo!", 

// lAS DOS FORMAS DAN EL MISMO OUTPUT PORQUE EN ESTE CASO NO CAMBIA EL SCOPE


var x = 0;
{
    let x = 1;
    const y = 2;
    console.log(x);
    console.log(y);
}
console.log(x); // 1, 2, 0 , Porque en este caso se ejecuta lo que está entre corchetes primero donde la x hacer referencia a let x = 1 porque pertenece a ese scope y despues se hace console log de la var x = 0 de fuera de ese scope