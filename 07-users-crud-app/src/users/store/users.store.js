import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    users: [],
    currentPage: 0,
}

const loadNextPage = async () => {
    let users = await loadUsersByPage(state.currentPage+1);
    if(users.length===0) 
        return;

    state.currentPage++;
    state.users = users;
}

const loadPrevPage = async () => {

    if(state.currentPage<=1)
        return;

    let users = await loadUsersByPage(state.currentPage-1);
    if(users.length===0) 
        return;

    state.currentPage--;
    state.users = users;
}

/**
 * 
 * @param {User} user 
 */
const onUserChange = (updatedUser) => {
    let wasFound = false;
    state.users = state.users.map(user=>{

        if(user.id === updatedUser.id){
            wasFound = true;
            return updatedUser;
        }
        
        return user;

    });

    if(state.users.length<10 && !wasFound){
        state.users.push(updatedUser);
    }
}

const reloadPage = async () => {
    let users = await loadUsersByPage(state.currentPage);
    if(users.length===0) {
        await loadPrevPage();
        return;   
    }

    state.users = users;    
}

/**
 * 
 * @returns {User[]}
 */
const getUsers = ()=>{
    return [...state.users];
}

/**
 * 
 * @returns {Number}
 */
const getCurrentPage = ()=>{
    return state.currentPage;
}

export default {
    getCurrentPage,
    getUsers,
    loadNextPage,
    loadPrevPage,
    onUserChange,
    reloadPage,
}