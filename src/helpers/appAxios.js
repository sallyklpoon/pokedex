import axios from 'axios';

const appAxios = axios.create();

appAxios.interceptors.response.use(
    async(res) => {
        const reqURL = new URL(res.config.url);
        const endpoint = reqURL.pathname;
        
        const payload = {
            username: JSON.parse(localStorage.getItem('user'))?.username,
            endpoint: endpoint,
            status: res.status
        }

        await axios.post(`http://localhost:6001/request/create`, payload);
    }, async(err) => {

        const reqURL = new URL(err.response.config.url);
        const endpoint = reqURL.pathname;

        const payload = {
            username: JSON.parse(localStorage.getItem('user'))?.username,
            endpoint: endpoint,
            status: err.response.status
        }

        await axios.post(`http://localhost:6001/request/create`, payload);

    }
);

export default appAxios;