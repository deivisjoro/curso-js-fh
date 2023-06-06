/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponent = ( element ) =>{

    //console.log(import.meta.env);

    const $div = document.createElement('div');
    const title = 'Environments Component';
    let html = '';
    html += '<h2>' + title + '</h2>';
    html += `
                variables: <br>
                DEV: ${import.meta.env.DEV} <br>
                API KEY: ${import.meta.env.VITE_API_KEY} <br>
            `;
    html += '<hr>';
    $div.innerHTML = html;
    element.appendChild($div);
}
