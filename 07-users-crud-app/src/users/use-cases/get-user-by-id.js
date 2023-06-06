import { localhostUserToModelMapper } from "../mappers/localhost-user-to-model.mapper";
import { User } from "../models/user.model";

/**
 * 
 * @param {Number|String} id 
 * @returns {Promise<User>}
 */
export const getUserById = async ( id ) => {
 
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;

    const res  = await fetch(url);
    const data = await res.json();
    const user = localhostUserToModelMapper(data);
    
    return user;

}
