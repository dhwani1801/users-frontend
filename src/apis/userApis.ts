import axios from 'axios';

export const userService = {
    registerUser: (data: any) => axios.post('http://localhost:5000/users', data),
    getUsers: () => axios.get('http://localhost:5000/users/list').then(res => res.data),
};