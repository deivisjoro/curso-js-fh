import modalHtml from './render-modal.html?raw';
import './render-modal.css';
import { getUserById } from '../../use-cases/get-user-by-id';

let modal, form, firstInput, loadedUser = {};

/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async ( id ) => {
    modal?.classList.remove('modal-hide');
    loadedUser = {};
    firstInput?.focus();

    if(!id) return;

    const user = await getUserById(id);

    setFormValues(user);

}

/**
 * 
 * @param {User} user 
 */
const setFormValues = (user) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
    loadedUser = user;  
}

export const hideModal = () => {    
    modal?.classList.add('modal-hide');
    form?.reset();
}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike)=>Promise<Void>} saveUserCallback
 */
export const renderModal = ( element, saveUserCallback ) => {

    if(modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.classList.add('modal-container', 'modal-hide');

    element.appendChild(modal);

    form = modal.querySelector('form');
    form.addEventListener('submit', async (event)=>{
        event.preventDefault();

        const formData = new FormData(form);
        const userLike = {...loadedUser};
        userLike.isActive = false;
        //for(const input of formData){
        for(const [key, value] of formData){
            if(key==='balance'){
                //data[key] = Number(value);
                userLike[key] = +value;
                continue;
            }

            if(key==='isActive'){
                userLike[key] = (value === 'on');
                continue;
            }

            userLike[key] = value;
        }
        
        await saveUserCallback(userLike);
        hideModal();
    });

    modal.addEventListener('click', (event)=>{
        if(!event.target.classList.contains('modal-container'))
            return;
        hideModal();
    });

    firstInput = modal.querySelector('input[name="firstName"]');

}
