import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async ( element ) =>{
    console.log('inicio del componente');
    const $div = document.createElement('div');
    const title = 'Async Await Component';
    let html = '';
    html += '<hr>';
    html += '<h2>' + title + '</h2>';
    html += ``;

    const id1 = '5d86371fd55e2e2a30fe1ccb1'; //doctor strange
    const id2 = '5d86371f2343e37870b91ef1'; //hulk
    const id3 = 'id_con_error';
    //esto es para cuando una promesa depende del resultado de una promesa anterior, hablamos del await, el try y catch son para el manejo de errores
    try{
        const hero1 = await findHero(id1);
        //podemos desestructurar
        // const {name} = await findHero(id1);
        // const {name: name1} = await findHero(id1);
        console.log('respuesta de la primera busqueda');

        const hero2 = await findHero(id2);
        console.log('respuesta de la segunda busqueda');

        html += `<span class="text-blue"> ${hero1.name} / ${hero2.name} </span>`;
        html += '<br>';
    }
    catch(e){
        console.log('error de cualquiera de las busquedas');
        html += `<span class="text-blue"> ${e} </span>`;
        html += '<br>'; 
    }

    
    html += ``;
    html += '<hr>';
    $div.innerHTML = html;
    element.appendChild($div);
       

  

    console.log('fin del componente');
}

const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if(!hero) throw new Error(`Hero with id ${id} not found`);

    return hero;
}