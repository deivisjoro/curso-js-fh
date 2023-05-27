//para dejar el otro archivo sin modificaciones y como no hemos visto el tema de importaciones copiamos el contenido del archivo class.js y lo optimizamos
class Persona {

    static conteo = 0;
    static get getConteo(){
        return Persona.conteo + ' instancias';
    }
    static mensaje(){
        console.log('Hola a todos soy un metodo estatico');
    }
  
    nombre    = '';
    personaje = '';
    frase     = '';
    comida    = '';
   
    constructor(nombre, personaje, frase){
        console.log('creando objeto ' + this);
        this.nombre = nombre;
        this.personaje = personaje;
        this.frase = frase;
        Persona.conteo++;
    }
   
    set setComidaFavorita(comida){
        this.comida = comida;
    }
   
    get getComidaFavorita(){
        return this.comida;
    }
 
    quienSoy(){
        console.log(`Soy ${ this.personaje } y mi identidad es ${ this.nombre }`);
    }  

}

class Heroe extends Persona{

    clan;

    //si creo el constructor, obligatoriamente debo llamar al constructor de la clase padre
    constructor(nombre, personaje, frase, clan){
        //siempre el super debe ser la primera instruccion del constructor, sino genera error por la palabra this (el error es por el this, sino va el this pueden ir otras instrucciones antes del super)
        super(nombre, personaje, frase); 
        this.clan = clan;
    }

    //esta clase tiene todos los metodos y propiedades de la clase padre
    //podemos tener nuestros propios metodos y tambien sobre escribir los del padre
    quienSoy(){
        console.log(`Soy ${this.nombre} de ${this.clan}`);
        //podemos llamar desde la clase padre tambien si lo necesitamos
        //lo que queramos llamar se puede
        //super.quienSoy();
    }

}

const persona3 = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigo');
console.log(persona3); 

const heroe1 = new Heroe("Clark", "Superman", "Frase superman", "DC");
console.log(heroe1);
heroe1.quienSoy();