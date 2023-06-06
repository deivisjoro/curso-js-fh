import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) =>{
    console.log('inicio del componente');
    const $div = document.createElement('div');
    const title = 'Async Component';
    let html = '';
    html += '<hr>';
    html += '<h2>' + title + '</h2>';
    html += ``;

    const id1 = '5d86371fd55e2e2a30fe1ccb1'; //doctor strange
    const id2 = '5d86371f2343e37870b91ef1'; //hulk
    const id3 = 'id_con_error';

    //verificamos que retornan exactamente igual
    //console.log(findHero(id1));
    //console.log(findHeroPromise(id1));

    //con el async la funcion se convirtio en una promesa
    findHero(id1)
        .then(hero => {
            console.log('respuesta de la primera busqueda');
            //para eviar el error ya que no se esta manejando en la funcion
            // html += `<span class="text-blue"> ${hero?.name} </span>`;
            html += `<span class="text-blue"> ${hero.name} </span>`;
            html += '<br>';

            html += ``;
            html += '<hr>';
            $div.innerHTML = html;
            element.appendChild($div);
        })

    findHero2(id3)
        .then(hero => {
            console.log('respuesta de la segunda busqueda');
            html += `<span class="text-blue"> ${hero.name} </span>`;
            html += '<br>';

            html += ``;
            html += '<hr>';
            $div.innerHTML = html;
            element.appendChild($div);
        })
        .catch(error=>{
            console.log('error de la segunda busqueda');
            html += `<span class="text-blue"> ${error} </span>`;
            html += '<br>';

            html += ``;
            html += '<hr>';
            $div.innerHTML = html;
            element.appendChild($div); 
        })

    //este mensaje se muestra primero que otros, porque esos otros estan dentro de funciones asincronass y esta instruccion es sincrona, primero se ejecutan las instrucciones sincronas
    console.log('fin del componente');
}

//al definir la funcion como asincrona, basicamente convierte la funcion en una promesa
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    return hero;
    //un return en una funcion asincrona es equivalente a llamar al resolve
}

//la funcion anterior es equivalente a la siguiente
const findHeroPromise = (id) => new Promise((resolve, reject)=>{
    const hero = heroes.find(hero => hero.id === id);
    resolve(hero);
});

//manejo del error en una funcion asincrona
const findHero2 = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if(!hero) throw new Error(`Hero with id ${id} not found`);
    //un error en una funcion asincrona es equivalente a llamar al reject
    //tambien se puede llamar solo al throw('mensaje de error')

    return hero;

    /**  IMPORTANTE */
    /**
     * try{
     *  instruccion 1
     *  instruccion 2
     *  return result;
     * }
     * catch(e){
     *   return 'Error: ' + e;
     * }
     * 
     * ambas estan utilizando el return, ambas ejecutan el resolve
     */

    //cualquier tipo de funcion se puede hacer asincrona
    /**
     * async function funcion1(){}
     * const funcion1 = async function(){}
     * const funcion1 = async () => {}
     */
}