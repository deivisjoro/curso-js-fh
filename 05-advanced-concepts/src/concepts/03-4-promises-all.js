import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesAllComponent = ( element ) =>{
    const $div = document.createElement('div');
    const title = 'Promises All Component';
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
  
    //este metodo se utiliza para ejecutar varias promesas que son independientes entre si

    //retorna un array con las respuestas de cada promesa
    //se ejecutan si o si todas las promesas
    //si alguna da error, se lanza el catch, pero todas se ejecutan
    //el then se ejecuta cuando todas retornen su respuesta resolve
    //las promesas se ejecutan de manera simultanea
    //el promise all espera que todas las promesas se resuelvan. si findhero2 termina primero que findheroe1 se debe esperar a findheroe1 
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then(([hero1, hero2])=>{
        //en este caso son independiente, pero necesito de los dos valores para hacer algo, pero son independientes
        renderTwoHeroes(hero1, hero2);
    })
    .catch(renderError);
    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = (id)=>{
    console.log(`buscando al heroe ${id}`);
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
