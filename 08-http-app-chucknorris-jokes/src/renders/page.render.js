import html from '../views/page.html?raw';

export const pageRender = (element)=>{

    const div = document.createElement('div');
    div.innerHTML = html;

    element.appendChild(div);

}
