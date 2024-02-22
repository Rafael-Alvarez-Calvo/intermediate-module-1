# Ejercicios de alcance (scope) en JavaScript

## Ejercicio 1: Alcance Global vs Local

Dado el siguiente código:

```javascript
    var mensaje = "¡Hola, mundo!";
    
    function saludo() {
        var mensaje = "¡Hola, function scope!";
        console.log(mensaje);
    }
    
    console.log(mensaje);
    saludo();
    console.log(mensaje);
```

¿Cuál será la salida al ejecutar este código? ¿Por qué?
Output: "¡Hola, mundo!" "¡Hola, function scope!" "¡Hola, mundo!", 

Ahora, intenta quitar la declaración var de la variable mensaje en la función saludo() y ejecútalo nuevamente. ¿Cómo cambia el resultado?
Output: "¡Hola, mundo!" "¡Hola, function scope!" "¡Hola, mundo!", 

lAS DOS FORMAS DAN EL MISMO OUTPUT PORQUE EN ESTE CASO NO CAMBIA EL SCOPE


## Ejercicio 2: Closures

Piensa en cómo puedes usar closures para crear funciones que implementen números sucesivos. Por ejemplo:

```javascript
sumaUno()(); // el resultado sería 1
sumaUno()()()(); // el resultado sería 3
```

Intenta implementar esta funcionalidad usando closures.


## Ejercicio 3: Bloque de scope con let y const

Dado el siguiente código:

```javascript
var x = 0;
{
    let x = 1;
    const y = 2;
    console.log(x);
    console.log(y);
}
console.log(x);
```
¿Cuál será la salida al ejecutar este código? ¿Por qué?

