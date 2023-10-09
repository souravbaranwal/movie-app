import { useQuery } from 'react-query';

import { queryKeys } from './queryKeys';
import { nowPlayingAPI, popularAPI, topRatedAPI, upcomingAPI } from '../../api';

export const useMovies = () => {
  return {
    useGetNowPlaying: () => {
      return useQuery([queryKeys.POPULAR], () => nowPlayingAPI(), {
        select: response => {
          return response.data.results;
        },
      });
    },

    useGetPopular: () => {
      return useQuery([queryKeys.NOW_PLAYING], () => popularAPI(), {
        select: response => {
          return response.data.results;
        },
      });
    },

    useGetTopRated: () => {
      return useQuery([queryKeys.TOP_RATED], () => topRatedAPI(), {
        select: response => {
          return response.data.results;
        },
      });
    },

    useGetUpcoming: () => {
      return useQuery([queryKeys.UPCOMING], () => upcomingAPI(), {
        select: response => {
          return response.data.results;
        },
      });
    },
  };
};
