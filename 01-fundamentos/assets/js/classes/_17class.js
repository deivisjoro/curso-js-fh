class Persona {

    //por defecto y obligatorio todas las clases en js vienen con el 'use strict'

    //los bloques de una clase no tienen un orden especifico, pero usualmente el orden es el siguiente
    /**
     * 1. propiedades y metodos estaticos
     * 2. propiedades 
     * 3. constructor
     * 4. sets y gets
     * 5. metodos
     * aveces se acostrumbra a situar todo lo privado al final de la clase
     */


    //al escribir estas propiedades automaticamente el objeto las reconoce y en el console.log aparecen como undefined, si lo deseamos las inicializamos
    //si hacemos algo como 
    /**
     * nombre    = '';
       personaje = '',
       frase     = '',
     */
    //generaria un error, porque el espera propiedades no variables. de igual forma si escribimos let, var o const genera error
    nombre    = '';
    personaje = '';
    frase     = '';
    comida    = '';
    //declarar las propiedades de esta forma es opcional, con hacer referencia a ellas dentro del constructor basta, pero si lo hacemos asi y quizas nos olvidamos de asignarle algun valor y queremos utilizarla en otro metodo, entonces no existira


    //en los argumentos del constructor se pueden recibir valores por defecto
    constructor(nombre, personaje, frase){

        //en caso de ser necesario podemos validar el paso de los parametros necesarios para la instancia
        //if(!nombre) throw Error('Se necesita el nombre de la persona');
        //si tenemos argumentos con valores por defecto, no se detecta el error anterior

        console.log('creando objeto ' + this);
        this.nombre = nombre;
        this.personaje = personaje;
        this.frase = frase;
        //el constructor es el unico metodo que no retorna undefined, aunque se lo especifiquemos explicitamente, ya que siempre retornara la instancia del objeto

        /**
         * por el modo estricto
         * nombre = 'Deivis'
         * Genera error, ya que la variable no esta inicializada o creada y no existe en este scope. Luego de escribirla dentro de los parametros si funcion (entienda que primero lo hice sin los parametros)
         */

        Persona.conteo++;
    }

    //GETTERS Y SETTERS
    //aunque los podemos implementar de la forma tradicional o como se hacen en java
    //javascript tiene una forma especial adicional y principal de hacerlos
    //para que es un get y un set??

    //se debe escribir un parametro oblogatoriamente, y solo acepta un parametro
    set setComidaFavorita(comida){
        this.comida = comida;
        //podemos ejecutar mas acciones y operaciones, no solo asignar
        //this.comida = comida.toUpperCase();
    }

    //no acepta parametros
    get getComidaFavorita(){
        return this.comida;
        //podemos dar otro tipo de salida, lo que queramos
        //return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    //METODOS
    //no es obligatorio escribirlos despues del constructor. pero es recomendable
    //estos metodos si generan undefined si no se especifica nada
    quienSoy(){
        console.log(`Soy ${ this.personaje } y mi identidad es ${ this.nombre }`);
    }
    //podemos llamar dentro de un metodo a otro metodo de la misma clase

    //PROPIEDADES Y METODOS ESTATICOS
    //nos permiten utilizar propiedades y metodos sin necesidad de instanciar la clase

    //al escribir static la propiedad desaparece del devtools en el objeto, pero si buscamos en el prototype, en el constructor la encontramos
    //sin static conteo y por ejemplo nombre no tienen diferencia
    static conteo = 0;
    static get getConteo(){
        return Persona.conteo + ' instancias';
    }
    static mensaje(){
        //podemos hacer lo que sea, pero no podemos hacer referencia a las propiedades de la instancia, si se puede pero no tendran valor
        console.log(this.nombre); //undefined
        console.log('Hola a todos soy un metodo estatico');
    }


}

//en javascript no se genera error sino enviamos los parametros
const persona1 = new Persona();
console.log(persona1);

const persona2 = new Persona('Tony Stark', 'Ironman', 'Tengo dinero');
console.log(persona2);

//la ventaja de las clases es que si necesitamos otro objeto con las mismas caracteristicas simplemente es crearlo y seguira toda la misma plantilla generada anteriormente
const persona3 = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigo, el hombre araña');
console.log(persona3); 
console.log(persona3.quienSoy()); 
//el set se utiliza como una propiedad
persona3.setComidaFavorita = 'Arroz';
//si revisamos en las devtools la impresion del console.log de persona 3
//dentro del prototype encontraremos la funcion, dentro del objeto no
console.log(persona3.comida);
//el get tambien se llama como una propiedad
//en el devtools si se muestrra como funcion
console.log(persona3.getComidaFavorita);

//no genera error, aunque se puede hacer, hay que evitarlo
//solo persona 3 lo va a tener
persona3.atributoX = 'valor x'; 

//las propiedades estaticas pertenecen a la clase
// Persona.conteo = 2;
// console.log(Persona.conteo);
console.log(Persona.conteo + " instancias");
console.log(Persona.getConteo);
Persona.mensaje();

//podemos crear propiedades estaticas desde fuera
Persona.propiedadExterna = 'Hola mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);
console.log(persona3);
