import { useInfiniteQuery } from 'react-query';

import { queryKeys } from './queryKeys';
import { removeDuplicates } from '../../utils';
import { nowPlayingAPI, popularAPI, topRatedAPI, upcomingAPI } from '../../api';
export const useMovies = () => {
  return {
    useGetNowPlaying: () => useInfiniteQuery(
      queryKeys.NOW_PLAYING,
      ({ pageParam = 1 }) =>
        nowPlayingAPI({
          pageParam,
        }),
      {
        getNextPageParam: (lastPage, pages) => {
          const currPage = pages.length;
          const totalMovies = lastPage.data.total_results;
          const fetchedMoviesCount =
            currPage - 1 * 10 + lastPage.data.results.length;

          return fetchedMoviesCount === totalMovies
            ? undefined
            : currPage + 1;
        },
        select: data =>
          removeDuplicates(
            data.pages
              .map(({ data: { results } }) => results)
              .flat()
          ) || [],
      }
    ),

    useGetPopular: () => useInfiniteQuery(
      queryKeys.POPULAR,
      ({ pageParam = 1 }) =>
        popularAPI({
          pageParam,
        }),
      {
        getNextPageParam: (lastPage, pages) => {
          const currPage = pages.length;
          const totalMovies = lastPage.data.total_results;
          const fetchedMoviesCount =
            currPage - 1 * 10 + lastPage.data.results.length;

          return fetchedMoviesCount === totalMovies
            ? undefined
            : currPage + 1;
        },
        select: data =>
          removeDuplicates(
            data.pages
              .map(({ data: { results } }) => results)
              .flat()
          ) || [],
      }
    ),

    useGetTopRated: () =>
      useInfiniteQuery(
        queryKeys.TOP_RATED,
        ({ pageParam = 1 }) =>
          topRatedAPI({
            pageParam,
          }),
        {
          getNextPageParam: (lastPage, pages) => {
            const currPage = pages.length;
            const totalMovies = lastPage.data.total_results;
            const fetchedMoviesCount =
              currPage - 1 * 10 + lastPage.data.results.length;

            return fetchedMoviesCount === totalMovies
              ? undefined
              : currPage + 1;
          },
          select: data =>
            removeDuplicates(
              data.pages
                .map(({ data: { results } }) => results)
                .flat()
            ) || [],
        }
      ),

    useGetUpcoming: () => useInfiniteQuery(
      queryKeys.UPCOMING,
      ({ pageParam = 1 }) =>
        upcomingAPI({
          pageParam,
        }),
      {
        getNextPageParam: (lastPage, pages) => {
          const currPage = pages.length;
          const totalMovies = lastPage.data.total_results;
          const fetchedMoviesCount =
            currPage - 1 * 10 + lastPage.data.results.length;

          return fetchedMoviesCount === totalMovies
            ? undefined
            : currPage + 1;
        },
        select: data =>
          removeDuplicates(
            data.pages
              .map(({ data: { results } }) => results)
              .flat()
          ) || [],
      }
    ),
  };
};
