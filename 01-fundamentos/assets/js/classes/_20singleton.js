class Singleton{

    static instancia;

    nombre = '';

    constructor( nombre = '' ){
        //doble negacion no es obligatoria, pero tiene una mayor claridad al trabajar con true y false en vez de undefined
        //const a = undefined;        
        //console.log(a); //undefined
        //console.log(!a); //true
        //console.log(!!a); //false        

        if(!!Singleton.instancia){ 
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        //no es oblogatorio, ya que por defecto un constructor siempre retornar el this
        return this;
    }
}

const instancia1 = new Singleton('nombre1');
const instancia2 = new Singleton('nombre2');
const instancia3 = new Singleton('nombre3');

//todas imprimen el mismo nombre, porque apuntan a la misma instancia
console.log(`Nombre en la instancia 1 es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia 2 es: ${ instancia2.nombre }`);
console.log(`Nombre en la instancia 3 es: ${ instancia3.nombre }`);