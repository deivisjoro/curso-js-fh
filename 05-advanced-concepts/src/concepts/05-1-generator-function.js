/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = ( element ) =>{
    const $div = document.createElement('div');
    const title = 'Generator Function Component';
    let html = '';
    html += '<hr>';
    html += '<h2>' + title + '</h2>';

    //las funciones generadores, retornan una serie de datos, los cuales podemos ir solicitando uno a uno
    // const generator = functionGenerator();

    //cada elemento tiene una propiedad llamada value y otra llamada done
    //el done del ultimo elemento sera true, el de los demas es false

    //el elemento retornado con return hace parte de los elementos generados y generalmente sera el del done true

    //si se ha terminado , pero se sigue llamando al generador, este retornara undefined

    //si se llama a la funcion functionGenerator().next().value se ejecutara siempre desde el principio, por eso primero se almacena la referencia al iterador y no se llama mas la funcion, sino que se sigue trabajando con el iterador o generador

    // html += generator.next().value + '<br>';
    // html += generator.next().value + '<br>';
    // html += generator.next().value + '<br>';
    // html += generator.next().value + '<br>';
    // html += generator.next().value + '<br>';
    // html += generator.next().value + '<br>';

    const generatorId = idGenerator();
    // console.log(generatorId.next());
    // console.log(generatorId.next());
    // console.log(generatorId.next());
    // console.log(generatorId.next());
    const $button = document.createElement('button');
    $button.textContent = 'Click me';

    const renderButton = ()=>{
        const { value } = generatorId.next();
        $button.textContent = `Click ${value}`;
    }

    html += ``;
    $div.innerHTML = html;
    element.appendChild($div);    
    
    element.appendChild($button);
    element.append += '<hr>';
    $button.addEventListener('click', renderButton);

     
    
}

//una funcion generadora no se puede escribir como funcion de flecha
//javascript sabe en que punto quedo la funcion cuando se le solicito un valor
function* functionGenerator(){
    yield 'primer valor';
    yield 'segundo valor';
    yield 'tercero valor';
    yield 'cuarto valor';

    return 'no hay mas valores';
}

function* idGenerator(){
    let currentId = 0;
    while(true){
        yield ++currentId;       
    }
}