/**
 * Pro Tip
 * Javascript no acepta constructores multiples, pero podemos hacer una aproximacion de la siguiente forma 
 */
class Persona{

    //crear metodos estaticos que al pasarle los argumentos, retorne una nueva instancia de la clase
    // static porObjeto(persona){
    static porObjeto({nombre, apellido, pais}){
        // return new Persona(persona.nombre, persona.apellido, persona.pais);
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }

    getInfo(){
        console.log(`Info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }

}

const nombre1 = 'Daniela';
const apellido1 = 'Perez';
const pais1 = 'Colombia';

const persona1 = new Persona(nombre1, apellido1, pais1);
persona1.getInfo();

const maria = {nombre: 'Maria', apellido: 'Martinez', pais: 'Venezuela'};
const persona2 = Persona.porObjeto(maria);
persona2.getInfo();
