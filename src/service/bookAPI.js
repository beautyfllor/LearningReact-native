import axios from 'axios';

const bookAPI = axios.create({
    baseURL:'http://10.107.144.4:1500'
});

export default bookAPI;