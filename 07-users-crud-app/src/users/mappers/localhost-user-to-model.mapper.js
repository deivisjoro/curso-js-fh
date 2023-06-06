import { User } from "../models/user.model"

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModelMapper = ( localhostUser )=>{
    
    const { 
        id, 
        isActive, 
        balance, 
        avatar, 
        first_name, 
        last_name, 
        gender 
    } = localhostUser;



    return new User({
        id, 
        isActive, 
        balance, 
        avatar, 
        firstName: first_name, 
        lastName: last_name, 
        gender    
    });
}
