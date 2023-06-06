import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    const $div = document.createElement('div');
    const title = 'For Await Component';
    let html = '';
    html += '<hr>';
    html += '<h2>' + title + '</h2>';
    html += ``;
    
    /*
    const id1 = '5d86371fd55e2e2a30fe1ccb1'; //doctor strange
    const id2 = '5d86371f2343e37870b91ef1'; //hulk
    const id3 = 'id_con_error';

    //podemos utilizar el await dentro de un if, dentro de un while, dentro de un for of: for(let hero of await getHeroesAsync()) //creo que aqui hay un error, llamar la funcion varias veces???
    if(await getHeroAsync(id1)){
        //lo malo es que no tengo los datos del heroe
        html += `Si existe el heroe con id ${id1}`;
    }
    else{
        html += `No existe el heroe con id ${id1}`;
    } 
    */
    
    //pero el tema es otro. vamos a desarrollarlo
    //no lo entiendo bien, la diferencia a for(let hero of await getHeroesAsync())
    //segun, esto es raro utilizarlo
    const heroIds = heroes.map(hero => hero.id);
    console.log(heroIds);

    const herosPromises = getHeroesAsync(heroIds);
    for await(const hero of herosPromises){
        html += hero.name;
        html += `<br>`;
    }

    html += ``;
    html += '<hr>';
    $div.innerHTML = html;
    element.appendChild($div);

}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}