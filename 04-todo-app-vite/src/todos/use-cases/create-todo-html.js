import { Todo } from "../models/todo.model";

/**
 * 
 * @param {Todo} todo 
 * @returns {HTMLLIElement}
 */
export const createTodoHTML = ( todo ) => {

    if(!todo)
        throw new Error('the parameter todo of Todo object is required');

    const { id, description, done } = todo;

    const $item = document.createElement('li');
    $item.innerHTML =   `<div class="view">
                            <input class="toggle" type="checkbox"${ done ? ' checked' : '' }>
                            <label>${ description }</label>
                            <button class="destroy"></button>
                        </div>
                        <input class="edit" value="${ description }">`;
    $item.setAttribute('data-id', id);
    if(done) 
        $item.classList.add('completed');
    
    return $item;
}