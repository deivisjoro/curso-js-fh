import todoStore, { Filters } from "../../store/todo.store";

let $element;
export const renderPending = ( elementId = '' )=>{
    if(!elementId)
        throw new Error(`Parameter ${ elementId } is required`);

    if(!$element)
        $element = document.querySelector(elementId);

    if(!$element)
        throw new Error(`Element ${ elementId } not found`);

        $element.innerHTML = todoStore.getTodos(Filters.Pending).length;
}
