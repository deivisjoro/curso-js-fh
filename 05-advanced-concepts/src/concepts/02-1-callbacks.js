import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) =>{
    const $div = document.createElement('div');
    const title = 'Callbacks Component';
    let html = '';
    html += '<hr>';
    html += '<h2>' + title + '</h2>';

    const id = '5d86371fd55e2e2a30fe1ccb1'; //doctor strange

    //una forma
    /*findHero(id, (error, hero)=>{
        
            // //esta es otra forma
            // html += '<br>';
            // //o se deja asi pero con el signo de interrogacion, porque sino da error, si la propiedad hero existe busca name, sino retorna undefined
            // //html += hero?.name;

            // //o se deja de esta otra manera, si se evalua a false se retorna el mensaje
            // html += hero?.name || 'No hay heroe';

            // html += '<br>';
        
        if(error) throw new Error(error);

        console.log(hero);
    });*/   

    html += ``;
    html += '<hr>';
    $div.innerHTML += html; 
    element.appendChild($div);
    findHero(id, writeHero, $div);
}

//puede o no venir el error
//@param { (error?: String, hero: Object)=> void} callback 
/**
 * 
 * @param {String} id 
 * @param { (error: String | Null, hero: Object)=> void} callback 
 */
const findHero = (id, callback, $div) => {
    const hero = heroes.find(hero=> hero.id === id);
    if(hero)
        callback(null, hero, $div);
        //la llamada al callback no detiene la ejecucion de esta funcion, pero en este caso como estamos en un if es la unica instruccion a ejecutar, en otro caso seria necesario el return
        //no se puede realizar un return callback porque si esperamos un valor de retorno, se regresaria lo que el callback retorn, mejor es llamar al callback y luego el return vacio
    else
        callback(`Hero with id ${id} not found`, null, $div);
}

const writeHero = (error, hero, $div) => {
    //if(error) throw new Error(error);
    if(error){
        $div.append(error);
        return;
    }

    console.log(hero);

    //vamos a pintar la imagen del heroe
    const $img = document.createElement('img');
    $img.src = hero.picture;
    $div.innerHTML = '<h3>'+hero.name+'</h3>';
    $div.append($img);


}
