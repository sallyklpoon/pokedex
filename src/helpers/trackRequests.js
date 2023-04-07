import axios from 'axios';

const recordRequest = async(endpoint, resStatus) => {

    const user = JSON.parse(localStorage.getItem('user'));
    const username = user ? user.username : 'unauthorized-user'

    console.log({
        username: username,
        endpoint: endpoint,
        status: resStatus
    })

    await axios.post(`http://localhost:6001/request/create`, {
        username: username,
        endpoint: endpoint,
        status: resStatus
    }).then(res => console.log(res));

};

export default recordRequest;