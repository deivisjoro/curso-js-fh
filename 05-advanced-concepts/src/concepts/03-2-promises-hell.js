import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesHellComponent = ( element ) =>{
    const $div = document.createElement('div');
    const title = 'Promises Hell Component';
    let html = '';
    html += '<hr>';
    html += '<h2>' + title + '</h2>';

    const renderTwoHeroes = (hero1, hero2)=>{
        html += `<span class="text-blue"> ${hero1.name} /  ${hero2.name}</span>`;
        html += '<br>';

        html += ``;
        html += '<hr>';
        $div.innerHTML = html;
        element.appendChild($div);
    }

    const renderError = error => {
        html += error;
        html += '<br>'; 
        html += ``;
        html += '<hr>';
        $div.innerHTML = html;
        element.appendChild($div); 
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb1'; //doctor strange
    const id2 = '5d86371f2343e37870b91ef1'; //hulk
    //de esta forma se incluye una promesa dentro de otra
    findHero(id1)
        .then(hero1 => {
            findHero(id2)
                .then(hero2 => {
                    renderTwoHeroes(hero1, hero2);
                })
                .catch(renderError);
        })
        .catch(renderError);
    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = (id)=>{
    const promise = new Promise((resolve, reject)=>{
        const hero = heroes.find(hero => hero.id === id);

        if(!hero){
            reject(`Hero with id ${id} not found`);
            return;
        }

        resolve(hero);

    });

    return promise;

}
