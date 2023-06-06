/**
 * 
 * @param {HTMLDivElement} element 
 */
export const demoComponent = ( element ) =>{
    const $div = document.createElement('div');
    const title = 'Demo Component';
    let html = '';
    html += '<hr>';
    html += '<h2>' + title + '</h2>';

    

    html += `
                contenido de la seccion
            `;
    html += '<hr>';
    $div.innerHTML = html;
    element.appendChild($div);
}
