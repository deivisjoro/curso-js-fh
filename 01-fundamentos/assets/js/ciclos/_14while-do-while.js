//QUE SON LOS CICLOS??

/*
  Imagina que necesitamos imprimir varias veces el mismo valor o repetir el mismo codigo varias veces:
  console.log(1);
  console.log(1);
  console.log(1);
  console.log(1);
  console.log(1);
  para esto sirven los ciclos
  for(let i=0;i<5;i++){
    console.log(1);
  }
  simplifican la codificacion, permiten utilizar recursividad, aplicar mas logica

*/

const carros = ['Ford','Mazda','Honda','Toyota'];

// existen 3 ciclos basicos y algunos de ellos tienen variantes con el for
//ciclos: while, do while y for

console.warn('While')
//1. Ciclo While
//ejecuta una serie de instrucciones mientras que la condicion a evaluar sea verdadera

//while(true) genera un ciclo infinito
//while(false) el ciclo nunca se ejecutara
//debe existir dentro del ciclo una instruccion que en algun momento convierta la condicion o expresion a evaluar en falso para que el ciclo pueda detenerse, es decir, en algun sitio se debe trabajar con la o las variables que afectan la expresion evaluada

let i = 0; //variable de control
//expresion booleana a evaluar dentro de parentesis
while( i < carros.length ) {
    console.log( carros[i] );
    // i = i + 1;
    i++;//moficando la variable de control para que alcance un valor que convierta la expresion evaluada a false en algun momento
}

/*
//esto seria un ciclo infinito, la variable de control siempre tendria el valor de 0 y el ciclo siempre imprimiria el primer auto infinitamente
while( i < carros.length ) {
    console.log( carros[i] );
}
*/

//los siguientes valores son considerados falso: 
// undefined
// null
// false


//break y continue son dos intrucciones que modifican el funcionamiento de un ciclo
//break termina todo el ciclo y continue salta a la siguiente iteracion, todas las instrucciones despues de estas palabras no se ejecutaran

console.log("=============")
//imprimir autos antes del 2:Honda, es decir, cuando encuentre Honda termina el ciclo y no lo muestra
i = 0;
while( i < carros.length ) {
    if ( i === 2 ){
        break;
    }
    
    console.log( carros[i] );
    i++;
}

console.log("=============")
//no imprimir el auto 1:mazda, cuando encuentre mazda, sigue a la siguiente iteracion
i = 0;
while( i < carros.length ) {
    if ( i === 1 ){
        i++;
        continue;
    }
    
    console.log( carros[i] );
    i++;
}

//2. Ciclo Do While
//ejecuta una serie de instrucciones mientras que la condicion a evaluar sea verdadera
//la diferencia con el ciclo while es que:
//el ciclo while antes de ejecutar las instrucciones, evalua la condicion
//el ciclo do whie, ejecuta las instrucciones y luego evalua la condicion
//con lo anterior se puede decir que: el ciclo while puede que no se ejecute ni una sola vez y el cuclo do while siempre minimo va a ejecutarse 1 vez
console.warn('Do While');
let j = 0;

do {
    console.log( carros[j]);
    j++;
} while( carros[j] ); //  while( j<4 ) ó while( j<carros.length )

