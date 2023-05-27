/**
 * 1. Los objetos no tienen una firma:
 * - No tienen obligatoriedad de tener ciertas propiedades
 * 2. Si quisieramos un metodo, por ejemplo que imprima los valores del objeto, ese metodo deberia incluirse en cada objeto y si requerimos una modificacion, se debe hacer en todos
 */

const persona1 = {
    nombre: 'Jose',
    edad: 30,
    imprimir() {        
        //para hacer referencia a propiedades del objeto se utiliza la palabra this
        //nombre y edad no son alcanzables desde este scope, por eso el this, que hace referencia al objeto donde se encuentra
        //aunque si podemos decir aqui dentro persona1.nombre, pero si cambiamos el nombre del objeto tambien se tiene que modificar esta referencia
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);    
    }
}

const persona2 = {
    nombre: 'Maria',
    edad: 15,
    imprimir() {
        //el metodo y las propiedades se deben escribir en cada objeto
        //dado el caso que requiramos modificar el metodo imprimir, debemos modificarlo en todos los objetos
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);    
    }
}

//no estan obligados los objetos a seguir el mismo patron, pero basicamente porque cada objeto es independiente y no se le esta indicando que pertenece a un tipo, js no tiene tipos
const persona3 = {
    nombre: 'Luis',
    edad: 23
}

console.log(persona1.imprimir());

 //SOLUCIONES
/**
 * 1. Prototype
 * Antes del ES6 (2015), estructura para crear objetos que tengan el mismo tipado
 * Objetos que contengan exactamente la misma herencia, las mismas propiedades, metodos, que se puedan crear herencias y nuevas instancias facilmente
 */

//los valores por defecto se utilizan desde ES6, entonces no hacen parte del estandar
//el estandar es el ES5 (antes del 2015)
//function Persona(nombre, edad=10){
function TPersona1(nombre, edad){
    console.log('Se ejecuto esta linea');
}

const persona4 = TPersona1('Pedro', 53); //se ejecuta el console log de la funcion
console.log(persona4); //retorna undefined, porque toda funcion retorna algo

//como convertimos lo anterior en un generador de instancias??
const persona5 = new TPersona1('Daniela', 21);
console.log(persona5); //retorna un objeto vacio de tipo persona y un prototype

//entonces para crear una clase o un prototipo, debemos inicializar las propiedades
function TPersona2(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    /*
    //genera error al llamarla x fuera persona.imprimir()
    //no la muestra en el console.log cuando se imprime el objeto
    //aqui no generar error, aunque no se prueba su llamado detro del objeto
    function imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);    
    }

    //tampoco funciona
    function this.imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);    
    }
    */
    
    /*
    //esta funciona y la de flecha tambien, dentro de ambas la palabra this hace referencia al objeto
    this.imprimir = function(){
        console.log(this)
    }
    console.log(this)
    //cuando se utiliza el this, los valores a referenciar deben estar declarados antes, es decir, no puedo decir this.nombre, si arriba no existe la asignacion al valor
    */
    this.imprimir = function(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`); 
    }
}
const persona6 = new TPersona2('Deivis', 34);
const persona7 = new TPersona2('Persona 7', 77); //se crean todas las instancias deseadas
console.log(persona6);
persona6.imprimir();
//problema es que se carece de documentacion, se resuelve un poco con los comentarios. por ejemplo: se crea el objeto con la palabra new

//aqui podemos trabajar con el prototype del objeto, pero es algo que ya no se utiliza mucho, porque ya se estan implementando las clases

//vamos a encontrar mas problemas cuando queremos aplicar conceptos que soluciona la poo, por ejemplo si queremos extender la funcionalidad del objeto, etc