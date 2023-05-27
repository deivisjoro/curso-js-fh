
//forma antigua de crear un arreglo, aun funciona, se declara el arreglo con 10 posiciones vacias
const arr = new Array(10); 
console.log({arr});

//imprimo dentro del console.log con los {} para que se muestre el nombre de la variable que se esta sacando por consola

//forma moderna, se declara el array vacio
const arr1 = [];
console.log({arr1});

//se declara un arreglo para almacenar 3 elementos string
const videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];
console.log({ videoJuegos });

//imprimir el primer elemento
console.log( videoJuegos[0] );

//en js un arreglo puede contener elementos de diferentes tipos de datos 
let arregloCosas = [
    true,
    123,
    'Deivis',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];
//imprime todo el arreglo
console.log({ arregloCosas });

//imprime la posicion 2: Deivis
console.log( arregloCosas[2] );

//imprime Woodman
console.log( arregloCosas[7][4][1] );


let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length );

let primero = juegos[ 0 ]; 
//dentro de los corchetes se puede realizar operaciones
//let primero = juegos[ 1-1 ]; 
let ultimo  = juegos[ juegos.length - 1 ];

console.log({ primero, ultimo });

//recorre el array y por cada elemento se realiza una operacion
juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

//agregar un nuevo elemento al final, luego de agregado se retorna la nueva longitud
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud, juegos });

//se agrega al inicio y devuelve la longitud del array
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

//elimina del final y devuelve el elemento borrado
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });


console.log( juegos );
//elimina elementos del array, se indica la posicion inicial y la cantidad de elementos a eliminar, retorna el array de los elementos eliminados
let pos = 1;
let juegosBorrados = juegos.splice( pos, 2);
console.log({ juegosBorrados, juegos });

//obtener el indice de un elemento, es case sensitive la busqueda
let metroidIndex = juegos.indexOf('Metroid'); // CaSeSeNsItIvE
console.log({ metroidIndex });
