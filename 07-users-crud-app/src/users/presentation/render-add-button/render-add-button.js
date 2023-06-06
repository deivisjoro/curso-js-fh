import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {()=> Void} callback 
 */
export const renderAddButton = ( element, callback ) => {

    const fabButton = document.createElement('button');
    fabButton.textContent = '+';
    fabButton.classList.add('fab-button');

    element.appendChild(fabButton);

    fabButton.addEventListener('click', ()=>{

        showModal();

    });

}
