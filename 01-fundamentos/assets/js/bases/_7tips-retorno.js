//una funcion puede retornar un objeto
function crearPersona1( nombre, apellido ) {
    return { 
        nombre: nombre,
        apellido: apellido
    }
}
const persona1 = crearPersona1( 'Fernando1', 'Herrera1' );
console.log( {persona1} );

//desde ES6 o EcmaScript2015, asignar a una propiedad una variable que se llame igual, se considera redundante, nombre:nombre, desde ES6 es opcional
function crearPersona2( nombre, apellido ) {
    return { nombre, apellido }
}
const persona2 = crearPersona2( 'Fernando2', 'Herrera2' );
console.log( {persona2} );

//como la funcion solo contiene el return en el cuerpo, se escribiria de esta forma
const crearPersona3 = ( nombre, apellido ) => ({ nombre,apellido });
const persona3 = crearPersona3( 'Fernando3', 'Herrera3' );
console.log( {persona3} );

//recordar que las funciones basicas o tradicionales tienen implicita la propiedad arguments
function imprimeArgumentos1() {
    console.log( {arguments} );
}
imprimeArgumentos1('Deivis', 21, true); //imprime un array con 3 elementos


//la notacion ... es un parametro rest, el cual crea un array con todos los argumentos enviados, es una forma de generar parametros ilimitados/dinamicos
//las funciones flecha no tienes la propiedad arguments , pero podemos simularla de esta forma, las funciones tradicionales tambien tienen parametros rest

const imprimeArgumentos2 = (...argumentos ) => {
    console.log({ argumentos });
}
imprimeArgumentos2('Deivis', 21, true);

//despues del parametro rest no puede venir ningun otro argumento, antes si los que se deseen
/*
    //esto generaria un error
    const imprimeArgumentos2 = (...argumentos, edad ) => {
        console.log({ argumentos });
    }
    imprimeArgumentos2('Deivis', 21, true);
*/

//en este ejemplo decimos que desde el segundo en adelante si se envian, todos llegaran a argumentos
const imprimeArgumentos3 = ( edad, ...argumentos ) => {
    console.log({ edad, argumentos });
    return argumentos;
}


/*
    si quisieramos trabajar con los valores independientes se deberia realizar un trabajo extra
    const argumentos = imprimeArgumentos3(10, true, false, 'Fernando', 'Hola');
    console.log(argumentos[0], argumentos[1], argumentos[2], argumentos[3]);

    Peor seria si se necesitan crear esas constantes o variables
    const vivo = argumentos[0];
    const casado = argumentos[1];
    const nombre = argumentos[2];
    const saludo = argumentos[3];

    para evitar esto, podemos utilizar desestructuracion

*/

//podemos realizar una desestructuracion de arrays, imprimeArgumentos3 recibe por aparte a edad y los demas en la variable argumentos y retorna la var argumentos
//por eso se realiza la desestructuracion sin tener en cuenta a edad
const [ casado, vivo, nombre, saludo ] = imprimeArgumentos3(10, true, false, 'Fernando', 'Hola');
console.log({ casado, vivo, nombre, saludo });

//en la desestructuracion de arrays no importa el nombre de las variables
//en la desestructuracion de objetos los nombres de las variables se deben llamar igual a la propiedad que se encuentra en el objeto a desestructurar
//en la desestructuracion podemos asignarle un nuevo nombre a una propiedad
const { apellido: nuevoApellido } = crearPersona1( 'Fernando', 'Herrera' );
console.log({ nuevoApellido });


//directamente en los parametros de una funcion podemos desestructurar, y se menciona como desestructuracion de argumentos
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {

//     console.log( 'nombre',personaje.nombre );
//     console.log( 'codeName',personaje.codeName );
//     console.log( 'vivo',personaje.vivo );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );

// }
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );