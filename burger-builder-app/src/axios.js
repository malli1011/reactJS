import axios from 'axios';

const instance = axios.create({
            baseURL: 'https://react-my-burger-5982a.firebaseio.com/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
          });

//instance.defaults.baseURL ='https://react-my-burger-5982a.firebaseio.com/';

export default instance;