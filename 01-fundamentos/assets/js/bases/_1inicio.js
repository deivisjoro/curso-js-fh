
// 1. Hola Mundo
console.log('Hola mundo');

// 2. Variables
/* 
  Contenedor de informacion que apunta a una direccion de memoria
  Guarda datos en memoria, dichos valores se pueden utilizar en el
  transcurso del codigo y tambien se pueden ir actualizando.
  Las variables se pueden declarar de dos formas, con var y let y tambien se pueden utilizar constantes
  Una variable en JS puede utilizarse sin declarar, pero no es buena practica
  Con var o sin forma (sin var o let) es la forma antigua y se seguira utilizando porque js busca compatibilidad y hay muchas app desarrolladas ya
*/
var   a = 10;
let   b = 10;
const c = 10;

/*

  Una forma corta de declarar e inicializar variables
  let a = 1, b = 2;

  El valor de las variables declaradas con var y let se puede actualizar las veces
  que se desee, las declaradas con const no se pueden actualizar y se deben obligatoriamente inicializar de inmediato

  const b;//esto generar error porque se debe inicializar de inmediato
  b = 10;

  const c = 10; //correcto

  let a; //esto es correcto para let y var se pueden declarar sin inicializar
  a = 10;

  la diferencia entre var y let se pueden analizar en el scope o alcance: var declara variables globales, es decir, la variables que se declaren con var, se pueden utilizar en cualquier bloque y modifican el valor , que al ser solicitado x fuera del bloque va a contener las modificaciones
  var a = 3;
  if(true){
    var a = 5;
  }
  console.log(a); //imprime 5

  let a = 3;
  if(true){
    let a = 5;
  }
  console.log(a); //imprime 3

  Tambien se debe mencionar que con var las variables se asignan en el objeto global windows (lo cual puede ser problematico en algunos casos), let y const no las sobre escribe (por ejemplo el ancho de la ventana, con let si tenemos declarada una variable con ese nombre outerWidth, para llamarla se llama con el mismo nombre y para acceder al ancho de la ventana se debe anteponer el objeto windows para poder diferenciarlos windows.outerWidth, con var siempre iba a dar el mismo resultado)
  Otro detalle: si tratamos de imprimir una variable que no ha sido declarada:
  console.log(nombre) generaria el error correspondiente y esperado de que la variable no existe, si despues de esta instruccion declaramos la variable con var en la linea anterior se imprimira undefined porque js lo primero que hace es un barrido de todo el archivo y registra las funciones y variables, entonces indicara que la variable existe pero no tiene valor, lo cual puede provocar comportamientos que no esperamos, si la declaramos con let se mostrara el error de que no podemos utilizar una variable sin antes declararla

  las variables al ser declaradas se pueden inicializar
  let a = 10;

  las variables pueden cambiar tantas veces como quieran su valor
  let a = 1;
  let b = 2;
  a = 3;
  a = 4;
  a = b;
  a = a+b;
  a = a+2;

  las variables en js tienen tipado dinamico y el tipo es asignado al momento de asignar el valor, la misma variable puede cambiar de tipo varias veces
  let a = 1; //aqui es number
  a = "deivis" //aqui es string

  Los tipos de datos son:
  - primitivos: Seis tipos de datos primitivos, controlados por el operador typeof: Undefined (typeof instance === "undefined"), Boolean (typeof instance === "boolean"), Number, String, BigInt, Symbol
  - Especiales: Null (typeof instance === "object"), objetos {}, arrays [], funciones (typeof instance === "function")

  una variable declarada pero no inicializada toma el tipo de dato undefined

  Los datos primitivos se pasan por valor, los demas por referencia, es decir, si una variable hace referencia a otra, si se modifica una, se modifica la otra

  let x = 4;
  let z = x;
  z = 5;
  console.log(x,z) //imprime 4 y 5 (se trabaja el valor)
  

  let objeto1 = {a:4}
  let objeto2 = objeto1;
  objeto2.a = 5;
  console.log(objeto1.a, objeto2.a);//ambos imprimen 5 (se trabaja la referencia)

  las constantes son mas ligeras que las variables porque no tienen propiedades para establecer valores, entre otros aspectos. las constantes son muy utilizadas para la declaracion de objetos o arrays, ya que de todas formas se guarda la referencia del elemento, pero los items internos pueden cambiar como variables

*/

// 3. Reglas para asignar nombres a variables y palabras reservadas

// 4. Consola
/*
  console.log('%c Mis Variables ', 'color:blue;'); //formatea la salida  con propiedades css

  console.log({var1}); //muestra el valor y el nombre de la variable

  console.table(objeto); //muestra en forma de tabla con indices y valores
  console.table({var1, var2, var3});
  console.error(mensaje);//mensaje con icono de error
  console.warn(mensaje); //mensaje con icono de advertencia

  el console.log admite 1 o varios parametros, asi que se pueden concatenar valores, utilizando paramtros o formateando el string (con template string, concatenaciones con el simbolo +)
*/



