 
 //vite permite este tipo de importaciones, importa el archivo y lo carga en una variable, pero con el import normal import nombreVar from './file.extension' genera un error porque el html no lo procesa, posiblemente con un plugin de vite pueda hacerlo (procesar o entender la info), pero independiente de ello, vite incorpora la funcionalidad raw para importar el contenido en crudo o tal cual como esta en el archivo import nombreVar from './file.extension?raw'
import html from './app.component.html?raw';
import todoStore, { Filters } from '../../store/todo.store';
import { renderTodos, renderPending } from '../use-cases';

const RefElementsHTML = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    FiltersLinks: '.filter',
    PendingCount: '#pending-count',
}
 
/**
 * 
 * @param {String} elementId HTMLElement donde se renderizara la app
 */
export const AppComponent = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos(RefElementsHTML.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = ()=>{
        renderPending(RefElementsHTML.PendingCount);
    }

    (()=>{

        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector( elementId ).appendChild( app );

        displayTodos();

    })();

    /**
     * Los siguientes bloques deben ir despues de la funcion, porque se debe crear 
     * el html primero, cual funcion? la de arriba, la funcion anonima autoinvocable
     * que ademas es una funcion sincrona
     */

    //Referencias HTML    
    const $newTodoInput   = document.querySelector(RefElementsHTML.NewTodoInput);
    const $todoList       = document.querySelector(RefElementsHTML.TodoList);
    const $clearCompleted = document.querySelector(RefElementsHTML.ClearCompleted);
    const $filtersLinks   = document.querySelectorAll(RefElementsHTML.FiltersLinks);

    //Listeners
    $newTodoInput.addEventListener('keyup', ( event )=>{
        if(event.keyCode!==13) return;

        const description = event.target.value;
        if(description.trim().length===0) return;

        todoStore.addTodo(description);
        displayTodos();

        event.target.value = '';
    });

    //ojo con este orden de listener, tenia primero el listener del toggle antes que este, y cuando intentaba eliminar un todo, pero cancelaba la eliminacion se activaba el toggle, aun cuando detenia la propagacion del evento, pero como estaba escrito primero, el toggle(listener) se ejecutaba antes que el de eliminacion 
    $todoList.addEventListener('click', ( event ) => {        

        if(!event.target.classList.contains('destroy')) return;

        event.stopImmediatePropagation();

        const description = event.target.previousElementSibling.textContent;

        if(!confirm(`Desea eliminar la tarea ${ description }?`)) return;

        const $element = event.target.closest('[data-id]');
        const id = $element.getAttribute('data-id');

        todoStore.deleteTodo(id);
        displayTodos();

    });

    $todoList.addEventListener('click', ( event ) => {
        const $element = event.target.closest('[data-id]');
        const id = $element.getAttribute('data-id');

        todoStore.toggleDoneTodo(id);
        displayTodos();
    });

    $clearCompleted.addEventListener('click', ()=>{
        if(!confirm('Desea eliminar todas las tareas completadas?')) return;

        todoStore.deleteTodosCompleted();
        displayTodos();
    });

    $filtersLinks.forEach(filter=>{
        filter.addEventListener('click', (event)=>{
            event.preventDefault();
            const $link = event.target;
            $filtersLinks.forEach(element=> element.classList.remove('selected'));
            $link.classList.add('selected');
            
            switch ($link.textContent) {
                case 'Todos':
                    todoStore.setCurrentFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setCurrentFilter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setCurrentFilter(Filters.Completed);
                    break;
        
            }
            displayTodos();
        });
    });

   

    
}
