import axios from 'axios';

const journalApi = axios.create({
    baseURL: 'https://journalapp-b63b2-default-rtdb.firebaseio.com'
});

export default journalApi;