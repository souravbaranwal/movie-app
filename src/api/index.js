import axiosInstance from '../config/axios';

export const nowPlayingAPI = ({ pageParam = 1 }) => axiosInstance.get('/movie/now_playing?language=en-US', { params: { page: pageParam } });
export const popularAPI = ({ pageParam = 1 }) => axiosInstance.get('/movie/popular?language=en-US', { params: { page: pageParam } });
export const topRatedAPI = ({ pageParam = 1 }) => axiosInstance.get('/movie/top_rated?language=en-US', { params: { page: pageParam } });
export const upcomingAPI = ({ pageParam = 1 }) => axiosInstance.get('/movie/upcoming?language=en-US', { params: { page: pageParam } });
