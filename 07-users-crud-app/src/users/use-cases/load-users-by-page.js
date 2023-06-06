import { localhostUserToModelMapper } from "../mappers/localhost-user-to-model.mapper";
import { User } from "../models/user.model";

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>} data
 */
export const loadUsersByPage = async (page = 1)=>{
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;

    const res  = await fetch(url);
    const data = await res.json();
    
    // console.log(data);
    const users = data.map(localhostUserToModelMapper);
    // console.log(users);
    return users;

}
