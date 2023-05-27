
let a = 10;
let b = a; //obtenemos una copia de la variable a en la variable b
console.log({ a, b }); // ambas imprimen 10

//modifiquemos la variable a
a = 30;

//volvemos a imprimir
console.log({ a, b }); //valores de impresion a:30 y b:10
//en este punto el valor de las variables va a ser independiente, a pesar de que b nacio de una copia de a. Entonces cualquier modificacion a ambas sera una accion independiente y no modificaran el valor de la otra variable
//Esto se debe a que en las variables de tipo primitivo se trabaja con el valor, no con la referencia
//En los objetos se trabaja con la referencia, alla los cambios que se le apliquen a una variable, se aplican a todas sus copias o referencias
//en las funciones si pasamos una variable o un argumento, se debe tener en cuenta el tipo de dato, si es primitivo, se esta pasando por valor, en caso contrario se pasa por referencia

//en el caso de los objetos se pasa la referencia, veamos un ejemplo
let juan = { nombre: 'Juan' };
let ana = juan;
console.log(juan,ana); //ambos imprimen nombre:Juan

//si modificamos el nombre del segundo objeto
ana.nombre = 'Ana';
console.log(juan, ana); //tambien se modificara el nombre del primer objeto, ambos imprimen nombre:Ana

//en este otro ejemplo tambien sucede los mismo
const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony  = cambiaNombre( peter );
console.log({peter, tony}); //para ambos casos se imprime peter


//si quisieramos que sean objetos independientes, una solucion es obtener una copia de los valores con el spread operator ...
//el spread operator: separa los elementos, obtiene una copia con nueva referencia de ellos
let juan2 = { nombre: 'Juan' };
let ana2  = { ...juan2 }; //se obtiene una copia las propiedades del primer objeto
console.log(juan2, ana2); //ambos imprimen nombre:Juan

ana2.nombre = 'Ana';//cambiamos el nombre al segundo objeto
console.log(juan2, ana2); //cada objeto tiene su propio nombre, no interfiere el uno con el otro

//otro ejemplo
const cambiaNombre2 = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter2 = { nombre: 'Peter' };
let tony2  = cambiaNombre2( peter2 );
console.log({peter2, tony2});

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = frutas;
console.log({frutas, otrasFrutas}); //imprimen iguales valores

otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas}); //imprimen iguales valores

//solucion con el spread operator o operador spread 
const frutas2 = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas2 = [...frutas2];
console.table({frutas2, otrasFrutas2}); //imprimen iguales valores

otrasFrutas2.push('Mango');
console.table({frutas2, otrasFrutas2}); //Aqui se ve la diferencia

//otra forma de romper la referencia en los arrays, es obtener una copia con el metodo slice, que devuelve un nuevo array con diferente referencia
const frutas3 = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas3 = frutas3.slice(); 
//sin argumentos  para que tome todos los elementos, el slice retorna un array con todos los elementos del array original, El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
console.table({frutas3, otrasFrutas3}); //imprimen iguales valores

otrasFrutas3.push('Mango');
console.table({frutas3, otrasFrutas3}); //Aqui se ve la diferencia

//cual es mas eficiente: spread o slice, realicemos la prueba

console.time('slice');
const otrasFrutas4 = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas5 = [...frutas];
console.timeEnd('spread');

//en teoria el spread es mas eficiente, sobre todo cuando el volumen de datos a trabajar es alto
//en este ejemplo casi siempre demoro menos el slice

console.table({ frutas, otrasFrutas4, otrasFrutas5 });