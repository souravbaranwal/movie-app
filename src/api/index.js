import axiosInstance from '../config/axios';

export const nowPlayingAPI = () => axiosInstance.get('/movie/now_playing?language=en-US&page=1');
