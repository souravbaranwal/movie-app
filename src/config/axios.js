import axios from 'axios';
import Config from 'react-native-config';


// An instance of Axios with common configuration, in a different use case I would have used axios interceptors for setting up auth token header but as we don't have any login feature I am using a simple axios instance for setting up headers
const axiosInstance = axios.create({
  baseURL: Config.ROOT_URL,
  headers: {
    'Authorization': `Bearer ${Config.MOVIE_DB_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

