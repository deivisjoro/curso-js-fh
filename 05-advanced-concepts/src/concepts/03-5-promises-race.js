import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesRaceComponent = ( element ) =>{
    const $div = document.createElement('div');
    const title = 'Promises Race Component';
    let html = '';
    html += '<hr>';
    html += '<h2>' + title + '</h2>';

    element.innerHTML = 'Loading...';

    //me va a permitir tomar la promesa que se resulva primero
    const renderValue = ( value ) => {
        element.innerHTML = '';
        html += `<span class="text-blue"> ${ value }</span>`;
        html += '<br>';

        html += ``;
        html += '<hr>';
        $div.innerHTML = html;
        element.appendChild($div);
    }  
    
    //no importa el orden o cantidad
    //si la mas rapida resulve con resolve, no importa si las demas dan error
    //si la mas rapida resuelve con error, se obtiene el error aunque las demas no tengan error
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ])
    .then(renderValue);
}

const slowPromise = () => {
    //como no vamos a rechazarla, vamos a pasarle solo el resolve
    return new Promise( resolve => {
        setTimeout(() => {
            resolve('Slow Promise');
        }, 4000);
    });

    /**
     * //esto es lo mismo
     * return new Promise((resolve, reject)=>{
     *      setTimeout(()=>{
     *          resolve('Slow Promise');
     *      }, 2000)
     * });
     * 
     */
}
const mediumPromise = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve('Medium Promise');
        }, 3000);
    });
}

const fastPromise = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve('Fast Promise');
        }, 2000);
    });
}
