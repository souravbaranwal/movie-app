import axios from 'axios';
import Config from 'react-native-config';
import Toast from 'react-native-toast-message';


// An instance of Axios with common configuration, in a different use case I would have used only axios interceptors for setting up auth token header but as we don't have any login feature I am using a simple axios instance for setting up headers. Example: https://github.com/souravbaranwal/zdaly-task/blob/main/src/config/axios.js

const axiosInstance = axios.create({
  baseURL: Config.ROOT_URL,
  headers: {
    'Authorization': `Bearer ${Config.MOVIE_DB_TOKEN}`,
    'Content-Type': 'application/json',
  },
});


// handling errors globally with axios interceptors.

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      Toast.show({
        type: 'error',
        position: 'top',
        text2: error?.message || 'API failed',
      });
      if (error.response.status === 401) {
        Toast.show({
          type: 'error',
          position: 'top',
          text2: 'Api key expired',
        });
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

