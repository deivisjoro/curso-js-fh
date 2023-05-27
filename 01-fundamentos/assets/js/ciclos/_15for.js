//3. Ciclo for
//es el mas utilizado, la diferencia radica en que este ciclo al empezar se conoce cuantas iteraciones va a realizar, aunque tambien se puede alterar su funcionamiento con break y continue, en los otros ciclos hay situaciones en las cuales no conocemos cuantas iteraciones se van a realizar
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
//el ciclo for tiene 3 partes, inicializacion de la variable de control, la condicion a evaluar y el incrementador, de esta manera no debemos colocar en el codigo el i++ 
for( let i = 0; i < heroes.length; i++ ) {
    console.log( heroes[i] );
}


console.warn('For in');
//trabaja sobre iterables, se obtienen los indices o keys en la variable de control
console.log('heroes');
for( let i in heroes ) {
    console.log( heroes[i] );
}

const persona = {id: 1, nombre:'juan'};
console.log('persona');
for (let i in persona) {
   console.log(i); // imprime "id" y "nombre" sin comillas
   console.log(persona[i]); //en los objetos se puede utilizar esta notacion
}

console.warn('For of');
//trabaja sobre iterables, se obtienen los valores en la variable de control
for( let heroe of heroes ){
    console.log( heroe );
}

//la variables i utilizadas son diferentes en cada ciclo, ya que solo pertenecen a ese scope (porque estan con let, si se declaran con var si existirian fuera de los ciclos), por fuera de los ciclos no existe
