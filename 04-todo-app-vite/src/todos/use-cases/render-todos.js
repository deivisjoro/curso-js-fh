import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";

//para que cada vez que se llame la funcion, no tengamos que ir al dom cada vez
let $element;

/**
 * 
 * @param {String} elementId es un string con el valor del atributo id del elemento HTML donde se renderizaran los todos
 * @param {Array<Todo>} todos un array con los todos a renderizar 
 */
export const renderTodos = ( elementId = '', todos = []) => {
    if(!elementId)
        throw new Error(`Parameter ${ elementId } is required`);

    if(!$element)
        $element = document.querySelector(elementId);

    if(!$element)
        throw new Error(`Element ${ elementId } not found`);
        
    $element.innerHTML = '';
    todos.forEach(todo => {
        $element.appendChild(createTodoHTML(todo));
    });
}
