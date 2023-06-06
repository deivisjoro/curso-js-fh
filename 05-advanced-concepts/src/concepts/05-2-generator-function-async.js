import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionAsyncComponent = async ( element ) =>{
    const $div = document.createElement('div');
    const title = 'Generator Function Async Component';
    let html = '';
    html += '<hr>';
    html += '<h2>' + title + '</h2>';
    html += ``;
    $div.innerHTML = html;
    
    element.appendChild($div);

    element.innerHTML += '<hr>';

    const heroGenerator = getHeroGenerator();
    let hero = await heroGenerator.next();
    while(hero.value){
        console.log(hero)
        element.innerHTML += hero.value + '<br>';
        hero = await heroGenerator.next();
    }         
    
}

const sleep = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}

async function* getHeroGenerator(){
    for(const hero of heroes){
        await sleep();
        yield hero.name;
    }

    //habria que hacer un return aqui para que el ultimo elemento, el que se emite con return, devuelva en su done true


    //yo prefiero en este ejercicio trabajar con el value
}
