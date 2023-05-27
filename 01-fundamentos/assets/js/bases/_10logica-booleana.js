const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}
regresaTrue();

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}
regresaFalse();

console.warn('Not o la negación');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true
//se puede hacer una doble negacion, pero al final se obtiene el mismo valor inicial !!true retorna true, !!false retorna false

console.log( !regresaFalse() ); // true


console.warn('And'); // true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && false ); // false
console.log( false && true ); // false
console.log( false && false ); // false
console.log( true && !false ); // true

console.log('=========');
//en lo siguiente no se ejecutan las dos funciones, se evalua la primera y de acuerdo a ello se retorna/ejecuta una o la otra
console.log(  regresaFalse() && regresaTrue() ); // se ejecuta regresaFalse, retorna false
console.log(  regresaTrue() && regresaFalse() ); // se ejecutan las dos funciones, retorna false 

console.log('==== && =====');
//podemos ejecutar funciones de acuerdo a una condicion
regresaFalse() && regresaTrue(); //se ejecuta solo izquierda
console.log("");
regresaTrue() && regresaFalse(); //se ejecutan ambas
console.log("true y funcion, ejecuta la funcion");
true && regresaTrue();
console.log("false y funcion , no ejecutara nada");
false && regresaTrue();

//como se menciono anteriormente se pueden adidar varias condiciones
console.log( '4 condiciones ', true && true && true && false ); // false


console.warn('OR'); // false si todos los valores son falsos
console.log( true || false ); //true
console.log( true || true ); //true
console.log( false || true ); //true
console.log( false || false ); //false

console.log(  regresaFalse() || regresaTrue() ); // se ejecuta las dos funciones, retorna true
console.log(  regresaTrue() || regresaFalse() ); // se ejecutan la funcion de la izquierda, retorna true 

console.log( '4 condiciones ', true || true || true || false ); // true

console.log('==== || =====');
//podemos ejecutar funciones de acuerdo a una condicion
regresaFalse() || regresaTrue(); //se ejecutan ambas funciones
console.log("");
regresaTrue() || regresaFalse(); //se ejecutan solo izquierda
console.log("true o funcion, no ejecuta nada");
true || regresaTrue();
console.log("false o funcion , ejecuta funcion");
false || regresaTrue();

//este operador || se utiliza mucho para las asignaciones
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo'; // 'Hola Mundo'
//const a1 = true && 'Hola Mundo' && 150; // 150
//const a1 = false && 'Hola Mundo' && 150; // false
//const a2 = 'Hola' && 'Mundo'; //Mundo
const a2 = 'Hola' && 'Mundo' && soyFalso && true; //false
const a3 = soyFalso || 'Ya no soy falso';//'Ya no soy falso'
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; //'Ya no soy falso de nuevo'
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true; //true y se ejecuta la funcion regresaTrue

console.log({a1, a2, a3, a4, a5 });


if ( regresaFalse() && regresaTrue() && (true || false || true) ) {//false y se ejecuta la funcion regresaFalse
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}




