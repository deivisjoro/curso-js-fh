/*
  JS basicamente tiene dos tipos o categorias de tipos de datos: primitivos y objetos
  Se le llama objetos literales a aquellos que creamos con una estructura interna de clave valor que representan las propiedades del objeto
*/

const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War'
};

console.log( personaje );
console.log('Nombre', personaje.nombre );
console.log('Nombre', personaje['nombre'] );
console.log('Edad', personaje.edad );

console.log('Coors', personaje.coords );
console.log('Lat', personaje.coords.lat );

console.log('No. Trajes', personaje.trajes.length );
console.log('último traje', personaje.trajes[ personaje.trajes.length - 1 ] );

//el llamado de propiedades puedes ser dinamico, en este ejemplo el nombre de la propiedad se pasa por medio de una variable
const x = 'vivo';
console.log('Vivo', personaje[x] );

//si encontramos una llave compuesta como la siguiente, no se puede utilizar la notacion del punto
console.log('Última película', personaje['ultima-pelicula'] );

// Más detalles

//elimina una propiedad de un objeto
delete personaje.edad;
console.log( personaje );

//podemos agregar mas propiedades al objeto
personaje.casado =  true;

//se obtiene un array, dentro encontraremos varios subarrays de dos posiciones
//un subarray por cada propiedad
//cada subarray posicion 0 llave, posicion 1 valor
const entriesPares = Object.entries( personaje );
console.log( entriesPares );

//asignarle un nuevo valor directamente a la constante generaria un error
//solo podemos modificar su estructura interna
// personaje = true;

//congela el objeto y no permite que se modifiquen, agreguen o eliminen propiedades
//pero solo congela las propiedades directas, las propiedades de un subobjeto no se congelan
Object.freeze( personaje );

//nada de esto funcionaria, no genera error, pero los cambios no se aplican
personaje.dinero = 10000000000;
personaje.casado = false;

//este si funciona porque es una propiedad de un subobjeto
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje );

//si queremos congelar los subobjetos tambien se puede llamar al freeze
//Object.freeze( personaje.direccion );

//retorna un array con las propiedades ['prop1', 'prop2', 'propn']
const propiedades = Object.getOwnPropertyNames( personaje );
const valores     = Object.values( personaje );
console.log({ propiedades, valores });







