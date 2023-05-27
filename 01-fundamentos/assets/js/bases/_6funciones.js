
function saludar( nombre ) {
    console.log(`Hola ${ nombre }`);
}
saludar('Deivis (con funcion basica)');
/*
  Estas son las funciones tradicionales en JS, pero de acuerdo al uso pueden presentar una problematica, por ejemplo
  si declaramos una variable con var
  var saludar = 2;
  y ahora llamamos a saludar en forma de funcion
  saludar();
  genera un error indicando en saludar no es una funcion, entonces se puede notar que se cambia la referencia del objeto de funcion a una variable
  si la variable se declara con let nos va a indicar que ya el identificador saludar esta siendo utilizado (dado que en el mismo scope se puede declarar la misma variable varias veces con var, pero con let y const no)
  Para evitar la re asignacion de la referencia mejor se debe utilizar una const y una funcion anonima
*/

/*
  No es necesario que una funcion tenga parametros, pero la mayoria lo emplean porque las funciones se utilizan para reutilizar codigo y para que el codigo ejecute instrucciones dinamicas a partir de los parametros
  function saludar(){
    console.log('Hola Deivis');
  }
*/

//constante que tiene la referencia a una funcion anonima
const saludar2 = function( nombre ) {
    console.log(`Hola ${ nombre }`);
}
saludar2('Deivis (con funcion anonima)');

//funcion flecha(arrow) o funcion lamda
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

//funcion flecha con parametro
const saludarFlecha2 = ( nombre ) => {
    console.log(`Hola ${ nombre }`);
}
saludarFlecha2('Deivis (con funcion flecha)');

//cuando una funcion flecha o arrow function no recibe parametros, obligatoriamente debe llevar los parentesis
//cuando una funcion flecha recibe 1 solo parametro puede llevar parentesis o puede optar por no utilizarlos
/*
  const funcion = (nombre) => { return 'hola '+nombre; }
  const funcion = nombre => { return 'hola '+nombre; }
*/
//cuando una funcion flecha recibe mas de un parametro los parentesis son obligatorios
//cuando una funcion flecha en su cuerpo solo tiene la intruccion del return, se pueden obviar las llaves y la palabra return
/*
    const suma = (a,b)=>{ return a+b }
    const suma = (a,b) => a+b

    podemos encontrar funciones de esta manera (sin parentesis, sin return, sin llaves)
    const saludar = nombre => `Hola ${nombre}`

    function getAleatorio() {
        return Math.random();
    }

    // Conversion en una función de flecha, que no tenga llaves { }
    // getAleatorio2()
    const getAleatorio2 = () => Math.random();
    console.log(getAleatorio2());
*/

//las funciones siempre retornan un valor, en el caso que no se defina, retorna undefined

//si una funcion espera parametros y estos no se le pasan, dentro de la funcion los parametros quedan con valor undefined
const saludar4 = ( nombre ) => {
    console.log(`Hola ${ nombre }`);
}
console.log(saludar4()); //esto imprime hola undefined

//los parametros pueden tener valores por defecto
const saludar5 = ( nombre = 'Deivis' ) => {
    console.log(`Hola ${ nombre }`);
}
console.log(saludar5()); //esto imprime hola Deivis
console.log(saludar5('Juan')); //esto imprime hola Juan

//si una funcion recibe mas parametros de los indicados en la funcion, no se generar error
saludar5('Daniela', 20, 'Cerete');

//las funciones tradicionales, las de flecha no, tienen un objeto implicito llamado arguments que es un array con todos los parametros pasados
const saludar6 = function(nombre, edad){
    console.log(arguments) 
    console.log(`Hola ${nombre} tu edad es ${edad}`);
}

//['Pedro', 20] y Hola Pedro tu edad es 20
saludar6('Pedro', 20); 

//['Pedro', 20, 'Cerete', true] y Hola Pedro tu edad es 20
saludar6('Pedro', 20, 'Cerete', true); 

//toda funcion retorna algo, si no lo indicamos retorna indefined
//para especificar el valor (un unico valor) a retornar se utiliza la palabra return

function sumar(a,b) {//retorno en funcion basica
    return a+b;
}

const sumar2 = function(a,b) {//retorno en funcion anonima
    return a+b;
}

const sumar3 = (a,b) => {//retorno en funcion flecha
    return a+b;
}
console.log(`La suma de 2 y 3 es ${sumar(2,3)}`);//independiente del tipo de funcion se invocan de la misma forma

console.log(sumar(2,3)); //se pueden enviar a la consola directamente la funcion

const sumar4 = (a,b) => {
    console.log(`La suma es ${a+b}`);
}
sumar4(2,3); //el console.log puede ir dentro de la funcion y solo se llama a la funcion


//recordando que la funcion flecha de escribe mejor de esta forma
const sumar5 = (a,b) => a+b; //ya que el cuerpo solamente es el return

//el valor de retorno de una funcion se puede almacenar
const result = sumar(2,3);
const retornoDeSaludar = saludar( 'Fernando'); 

//se puede retornar un objeto, un array, etc.
const funcion8 = ()=>{
    return ['Juan', 20, true]; //retornar un arreglo con tres elementos
}

//las instrucciones despues del return nunca se ejecutaran
const funcion9 = ()=>{
    return true;
    // Esto nunca se va a ejecutar
    console.log('Soy un código que está después del return');
}

//dentro del cuerpo de una funcion la palabra return puede escribirse varias veces, pero cuando el flujo encuentro la primera aparicion, alli se acaba la funcion



/*
  Las funciones flecha con las tradicionales tienen dos diferencias adicionales
  1. El uso de la palabra this, en las funciones tradicionales el this hace referencia al scope donde se encuentra, es decir, a la funcion u objeto, en las funciones tradicionales no es asi, sino que se sube al scope superior
  2. El interprete de JS al leer el archivo, antes de ejecutar las instrucciones, registra las funciones tradicionales y las de flecha no

*/


