import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesLinkComponent = ( element ) =>{
    const $div = document.createElement('div');
    const title = 'Promises Link (promesas en cadena) Component';
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
  
    //promesas en cadena, es una implementacion de promesas que dependen entre si, resulven de cierta manera, o mejoran el promise hell
    
    //cuando una promesa depende de otra esta sintaxis es muy utilizada  
    //en este ejemplo son promesas que dependen la segunda de la primera
    //cualquiera de las dos que genere error, un solo catch funciona
    //por temas de scope en este ejercicio necesito guardar el heroe1 y por eso se hace de esta manera, pero en casos como por ejemplo donde no se necesita el valor no es necesario asi, por ejemplo cuando obtenemos el valor de una peticion fetch (que es una promesa) y ese resultado queremos convertirlo en json que es otra promesa
    /**
     * fetch(url)
     *  .then(response=> response.json())
     *  .then(json=> console.log(json))
     *  .catch(error=> console.log(error));
     * 
     * en este caso la segunda depende de la primera, pero no necesito manejar el valor "response" en la segunda, en la segunda se maneja la respuesta de la nueva promesa, que sera un texto o un json, en la segunda la variable response no existe, en el ejemplo a continuacion de los heroes, si es necesario manejar esa variable, por eso se hace asi
     */
    //esto tambien es conocido como PROMESAS EN CADENA
    let hero1;
    findHero(id1)
        .then(hero => {
            hero1 = hero;
            return findHero(id2);
        })
        .then(hero=>{
            renderTwoHeroes(hero1, hero);
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
