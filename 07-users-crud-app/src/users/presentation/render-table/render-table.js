import usersStore from '../../store/users.store';
import { deleteUserById } from '../../use-cases/delete-user-by-id';
import { showModal } from '../render-modal/render-modal';
import './render-table.css';

let table;

const createTable = (element) => {

    const table = document.createElement('table');

    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.appendChild(tableHeaders);
    table.appendChild(tableBody);
    //table.append(tableHeaders, tableBody);
    return table;
}

const userListener = async (event) => {
    const element = event.target;
    if(element.classList.contains('select-user')){
        userSelectListener(element);
    }
    else if(element.classList.contains('delete-user')){
        await userDeleteListener(element);
    }
}

const userSelectListener = (element) => {    
    const id = element.getAttribute('data-id');
    showModal(id);
}

const userDeleteListener = async (element) => {
    const id = element.getAttribute('data-id');
    if(!confirm(`Desea eliminar el registro con id ${id}`)) return;
    try {
        await deleteUserById(id);
        await usersStore.reloadPage();
        document.querySelector('#current-page').textContent = usersStore.getCurrentPage();
        renderTable();
        
    } catch (error) {
        console.log(error);
        alert('Error: no se pudo eliminar el registro');
    }
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) => {

    const users = usersStore.getUsers();

    if(!table){
        table = createTable();
        element.appendChild(table);
        table.addEventListener('click', userListener);
    }

    let tableItems = '';
    users.forEach(user=>{
        tableItems += `
            <tr>
                <td>${ user.id }</td>
                <td>${ user.balance }</td>
                <td>${ user.firstName }</td>
                <td>${ user.lastName }</td>
                <td>${ user.isActive }</td>
                <td>
                    <a href="#/" class="select-user" data-id="${ user.id }">Select</a>
                     | 
                    <a href="#/" class="delete-user" data-id="${ user.id }">Delete</a>
                </td>
            </tr>
        `;
    });

    table.querySelector('tbody').innerHTML = tableItems;

}
