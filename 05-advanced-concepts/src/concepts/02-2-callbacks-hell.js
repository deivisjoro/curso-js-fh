import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksHellComponent = ( element ) =>{
    const $div = document.createElement('div');
    const title = 'Callbacks Hell Component';
    let html = '';
    html += '<hr>';
    html += '<h2>' + title + '</h2>';

    const id1 = '5d86371fd55e2e2a30fe1ccb1'; //doctor strange
    const id2 = '5d86371f2343e37870b91ef1'; //hulk

    //callback hell es la anidacion de callback, es algo que si tiene un nivel de profundidad alto (muchos callback anidados), es muy dificil de leer

    //en este caso vamos a imprimir 2 heroes, necesitamos del primero para imprimir a ambos, si alguno falla se imprime error
    findHero(id1, (error, hero1)=>{
        if(error){
            html += error;
            html += '<hr>';
            $div.innerHTML += html; 
            element.appendChild($div);
            return;
        }

        findHero(id2, (error, hero2)=>{
            if(error){
                html += error;
                html += '<hr>';
                $div.innerHTML += html; 
                element.appendChild($div);
                return;
            }
            
            html += hero1.name + ' / ' + hero2.name;
            html += '<hr>';
            $div.innerHTML += html; 
            element.appendChild($div);
        })
    }) 
}


/**
 * 
 * @param {String} id 
 * @param { (error: String | Null, hero: Object)=> void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(hero=> hero.id === id);
    if(hero)
        callback(null, hero);
    else
        callback(`Hero with id ${id} not found`, null);
}

