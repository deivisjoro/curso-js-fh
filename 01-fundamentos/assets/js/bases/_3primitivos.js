/*
En JS existe 6 tipos de datos primitivos
Number, String, Boolean, Undefined, BigInt y Symbol
Se puede obtener con tipo de un dato o de una variable o expression con el operador typeof, el cual retornara un string con el tipo correspondiente evaluado
typeof 'hola' retorna 'string'
let saludo = 'hola';
typeof saludo retorna 'string'
*/
console.log( typeof nombre );

nombre = 123;
console.log( typeof nombre );


let esMarvel = false;
console.log( typeof esMarvel );


let edad = 33;
console.log( typeof edad );

edad = 33.001;
console.log( typeof edad );


let superPoder;
console.log( typeof superPoder ); // ???

let soyNull = null;
console.log( typeof soyNull ); // ???


let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( typeof symbol1 );

//imprime false porque todos los simbolos son diferentes
console.log( symbol1 === symbol2 );
