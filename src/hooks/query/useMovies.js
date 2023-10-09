import { useQuery } from 'react-query';

import { queryKeys } from './queryKeys';
import { nowPlayingAPI } from '../../api';

export const useMovies = () => {
  return {
    useGetNowPlaying: () => {
      return useQuery([queryKeys.POPULAR], () => nowPlayingAPI(), {
        select: response => {
          return response.data.results;
        },
      });
    },
  };
};
