import { localhostUserToModelMapper } from "../mappers/localhost-user-to-model.mapper";
import { modelToUserLocalhostMapper } from "../mappers/model-to-user-localhost.mapper";
import { User } from "../models/user.model"

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async (userLike) => {

    const user = new User(userLike);

    if(!user.firstName || !user.lastName)
        throw 'Firstname and lastname are required';

    const userToSave = modelToUserLocalhostMapper(user);

    let userCurrent;

    if(user.id){
        userCurrent = await updateUser(userToSave);
    }
    else{
        userCurrent = await createUser(userToSave);
    }

    return localhostUserToModelMapper(userCurrent);

}

/**
 * 
 * @param {Like<User>} user 
 * @returns {User} newUser
 */
const createUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, { 
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        } 
    });

    const newUser = await res.json();
    return newUser;

}

/**
 * 
 * @param {Like<User>} user 
 * @returns {User} newUser
 */
const updateUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    const res = await fetch(url, { 
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        } 
    });

    const updateUser = await res.json();
    return updateUser;
}
