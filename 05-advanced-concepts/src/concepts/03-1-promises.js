import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = ( element ) =>{
    const $div = document.createElement('div');
    const title = 'Promises Component';
    let html = '';
    html += '<hr>';
    html += '<h2>' + title + '</h2>';

    //las promesas generan automaticamente una instruccion asincrona, que es no bloqueante y que se meneja en otra pila

    const renderHero = (hero)=>{
        html += `<span class="text-blue"> ${hero.name} </span>`;
        html += '<br>';

        //me toca escribir esto aca, porque la promesa es asincrona y sino lo hago asi, se ejecuta este bloque antes que la pintada del heroe, y luego el heroes no tendria donde pintarse, porque ha se ha realizado el append
        html += ``;
        html += '<hr>';
        $div.innerHTML = html;
        element.appendChild($div);
    }

    //utilizacion de la promesa
    const id1 = '5d86371f2343e37870b91ef1';
    //con un solo parametro la promesa se esta ejecutando pero no vemos nada, podemos utilizar un console.log dentro del cuerpo de la promesa para verificar
    //findHero(id1);
    findHero(id1)
        .then(hero => {
            //se puede utilizar sin las llaves porque es una sola instruccion
            //no solo se puede llamar una funcion, podemos ejecutar todas las intrucciones que queramos, asi como esta el catch
            renderHero(hero);
        })
        .catch(error => {
            html += error;
            html += '<br>'; 
            
            //me toca escribir esto aca, porque la promesa es asincrona y sino lo hago asi, se ejecuta este bloque antes que la pintada del heroe, y luego el heroes no tendria donde pintarse, porque ha se ha realizado el append
            html += ``;
            html += '<hr>';
            $div.innerHTML = html;
            element.appendChild($div);  
            
            //pudimos llamar una funcion asi como esta en el then
        });
    //tip
    //en caso de llamar una funcion y la funcion recibe los mismos parametros de la promesa y en el mismo orden, se puede hacer lo siguiente
    /**
     * findHero(id)
     *  .then((hero, a, b, c) => funcionX(hero, a, b, c))
     * 
     * se puede llamar asi
     * findHero(id)
     *  .then(funcionX)
     */

    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = (id)=>{
    //las promesas se pueden crear de varias formas
    const promise = new Promise((resolve, reject)=>{
        const hero = heroes.find(hero => hero.id === id);

        if(!hero){
            reject(`Hero with id ${id} not found`);
            //podemos llamar el reject vacio
            //tanto el resolve como el reject aunque se llamen varias veces, solo se ejecutaran una vez
            return;
        }

        resolve(hero);

    });

    return promise;


    // generalmente no se crea la variable y luego se retorna, sino que se retorna automaticamente la promesa return new Promise...

}
