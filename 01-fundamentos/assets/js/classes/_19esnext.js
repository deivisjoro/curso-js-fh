/**
 * Todavia esto esta en camino de ser implementado en todos los lugares, pero todavia no es globalmente aceptado
 * Es una caracteristica nueva, que aun no funciona en todos los lados, podemos probar en la pagina "i can use" y verificar navegadores compatibles con esta caracteristica
 * En este punto vamos a hablar de las propiedades y metodos privados
 */

class Rectangulo{

    area = 0;

    constructor(base=0, altura=0){
        this.base = base;
        this.altura = altura;

        this.area = (this.base * this.altura) / 2;
        // this.area = (base * altura) / 2; //cualquiera funciona
    }

}

const rectangulo1 = new Rectangulo(4,3);
console.log({Rectangulo});
console.log({rectangulo1});
console.log(`El area del rectangulo es ${ rectangulo1.area }`);

//problema, desde fuera pueden modificar el area accidental o intencionalmente
rectangulo1.area = 30;
//el siguiente valor retornado no es correcto porque se modifico manualmente el area
console.log(`El area del rectangulo con base ${rectangulo1.base} y altura ${rectangulo1.altura} es ${ rectangulo1.area }`);


//IMPLEMENTANDO PROPIEDADES PRIVADAS
class Rectangulo2{
    //con la almohadilla, hash o numeral declaramos la propiedad como privada
    //en todos los lugares debe seguir utilizandose con el signo numeral
    #area = 0;

    constructor(base=0, altura=0){
        this.base = base;
        this.altura = altura;

        this.#area= (this.base * this.altura) / 2;
        // this.area = (base * altura) / 2; //cualquiera funciona
    }

    get getArea(){
        return this.#area;
    }

}

const rectangulo2 = new Rectangulo2(4,3);
console.log({Rectangulo2});
console.log({rectangulo2});
//aqui marca error
//console.log(`El area del rectangulo es ${ (rectangulo2.#area) }`);

//aqui marca el error que no es accesible desde fuera
//rectangulo2.#area = 30;
//aqui marca error
//console.log(`El area del rectangulo con base ${rectangulo2.base} y altura ${rectangulo2.altura} es ${ rectangulo2.#area }`);

//solucion crear un metodo getter para el area
console.log(`El area del rectangulo con base ${rectangulo2.base} y altura ${rectangulo2.altura} es ${ rectangulo2.getArea }`);