/**
 * 
 * @param {Number|String} id 
 * @returns {Promise<Boolean>}
 */
export const deleteUserById = async ( id ) => {
 
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const res = await fetch(url, { 
        method: 'DELETE'
    });

    const data = await res.json();
    return true;
}
