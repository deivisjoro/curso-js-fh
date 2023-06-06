import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitNoSecuentialComponent = async ( element ) =>{
    console.log('inicio del componente');
    const $div = document.createElement('div');
    const title = 'Async Await no Secuential Component';
    let html = '';
    html += '<hr>';
    html += '<h2>' + title + '</h2>';
    html += ``;
    
    //tratar de mejorar la velocidad para funciones asincronas que no sean dependientes

    //esta seria la forma inicial
    /* console.time('medicion');
    const value1 = await slowPromise();
    console.log('respuesta de la primera funcion');

    const value2 = await mediumPromise();
    console.log('respuesta de la segunda funcion');

    const value3 = await fastPromise();
    console.log('respuesta de la tercera funcion');
    console.timeEnd('medicion');
    //esto esta tardando 6 segundos y algo */

    //esta seria la forma mejorada
    console.time('medicion2');
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]);
    console.timeEnd('medicion2');
    //esto esta tardando 3 segundos y algo
    //si se requiere atrapar el error , englobar todo el bloque en un try catch

    html += `<div class="text-blue"> ${value1} </div>`;
    html += `<div class="text-blue"> ${value2} </div>`;
    html += `<div class="text-blue"> ${value3} </div>`;
     
    html += ``;
    html += '<hr>';
    $div.innerHTML = html;
    element.appendChild($div);

    console.log('fin del componente');
}

const slowPromise = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve('Slow Promise');
        }, 3000);
    });
}
const mediumPromise = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve('Medium Promise');
        }, 2000);
    });
}

const fastPromise = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve('Fast Promise');
        }, 1000);
    });
}