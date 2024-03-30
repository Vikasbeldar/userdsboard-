import axios from 'axios';


const url = "http://127.0.0.1:3003/user";

export const getUserAction = async (id,user) => {
    id = id || '';
    return await axios.get(`${url}/${id}`,user);
}

export const addUserAction = async (user) => {
    return await axios.post(url,user);
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`,user);
}


export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}