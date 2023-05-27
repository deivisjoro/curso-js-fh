/*
const elMayor = (a, b) => {
    return (a > b) ? a : b;
}
*/
//utilizacion del retorno del ternario para retorno de una funcion flecha que solo tiene una linea en su cuerpo y esa linea es el return 
const elMayor = (a, b) => (a > b) ? a : b;
//const elMayor = (a, b) => a > b ? a : b; //funciona tambien, un poco mas dificil de ver
console.log( elMayor(15, 21) );

const tieneMembresia = ( miembro ) => miembro ? '2 Dólares' : '10 Dólares';

console.log( tieneMembresia(false) );

//se puede utilizar para la creacion de valores dentro de un array u objeto de forma condicional
const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    // (()=> 'Nick Fury')() //con tal que se regrese un valor, se puede utilizar cualquier expresion con retorno, como ejemplo una funcion (funcion anonima autoinvocada en este ejemplo)
    elMayor(10, 15) //otro ejemplo, con esto se agrega 15 al array
];

console.log( amigosArr );

//otro uso con un ternario anidado
const nota = 82.5; // A+ A B+
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({ nota, grado });



