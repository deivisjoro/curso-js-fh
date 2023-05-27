import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending',
}

const state = {
    todos: [
        new Todo('Task test 1'),
        new Todo('Task test 2'),
        new Todo('Task test 3'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    loadStateToLocalStorage();
    console.log(`Init store todos`);
}

const loadStateToLocalStorage = () => {
   if(!localStorage.getItem('state')) return;

   const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
   state.todos  = todos;
   state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = ( filter = Filters.All ) => {
    //para no enviar la referencia de los todos del store, le enviamos una nueva referencia con el spread operator
    switch (filter) {
        case Filters.All:            
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`option ${ filter } is not valid`);
    }
}

const addTodo = ( description ) => {
    if(!description)
        throw new Error('Description is required');

    state.todos.push( new Todo(description) );
    saveStateToLocalStorage();
}

const toggleDoneTodo = ( id ) => {
    state.todos = state.todos.map(todo => {
        if(todo.id === id){
            todo.done = !todo.done;
            todo.updateAt = new Date();
        }

        return todo;
    });
    saveStateToLocalStorage(); 
}

const updateDescriptionTodo = ( id, description ) => {
    state.todos = state.todos.map(todo => {
        if(todo.id === id){
            todo.description = description;
            todo.updateAt = new Date();
        }

        return todo;
    }); 
    saveStateToLocalStorage();
}

const deleteTodo = ( id ) => {
    state.todos = state.todos.filter(todo => todo.id !== id);    
    saveStateToLocalStorage();
}

const deleteTodosCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);  
    saveStateToLocalStorage();
}

const setCurrentFilter = ( newFilter = Filters.All ) => {
    if(!Object.keys(Filters).includes(newFilter))
        throw new Error(`filter ${ newFilter } is not valid`);
    
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteTodo,
    deleteTodosCompleted,
    getCurrentFilter,
    getTodos,
    initStore,
    setCurrentFilter,
    toggleDoneTodo,
    updateDescriptionTodo,
}