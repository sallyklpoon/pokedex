import axios from 'axios';

const logRequest = async(endpoint, resStatus) => {

    const user = JSON.parse(localStorage.getItem('user'));
    const username = user ? user.username : 'unauthorized-user'

    await axios.post(`http://localhost:6001/request/create`, {
        username: username,
        endpoint: endpoint,
        status: resStatus
    }).then(res => console.log('Request logged!'));

};

export default logRequest;