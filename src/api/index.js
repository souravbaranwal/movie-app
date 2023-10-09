import axiosInstance from '../config/axios';

export const nowPlayingAPI = () => axiosInstance.get('/movie/now_playing?language=en-US&page=1');
export const popularAPI = () => axiosInstance.get('/movie/popular?language=en-US&page=1');
export const topRatedAPI = () => axiosInstance.get('/movie/top_rated?language=en-US&page=1');
export const upcomingAPI = () => axiosInstance.get('/movie/upcoming?language=en-US&page=1');
