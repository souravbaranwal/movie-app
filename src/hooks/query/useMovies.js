import { useInfiniteQuery } from 'react-query';

import { queryKeys } from './queryKeys';
import { removeDuplicates } from '../../utils';
import { nowPlayingAPI, popularAPI, topRatedAPI, upcomingAPI } from '../../api';


const MOVIE_COUNT = 20;

export const useMovies = () => {
  return {
    // useInfiniteQuery is used for fetching paginated data and supports infinite scrolling.
    useGetNowPlaying: () => useInfiniteQuery(
      // using NOW_PLAYING as a unique key for the query, it helps react query to identify and manage the query.
      queryKeys.NOW_PLAYING,
      ({ pageParam = 1 }) =>
        nowPlayingAPI({
          pageParam,
        }),
      {
        // getNextPageParam is used to determine the next pageParam value for fetching the next page of data. It takes two arguments: lastPage (the last page of data fetched) and pages (an array of all pages fetched so far). It calculates the next pageParam based on the total number of movies and the current page.
        getNextPageParam: (lastPage, pages) => {
          const currPage = pages.length;
          const totalMovies = lastPage.data.total_results;
          const fetchedMoviesCount =
            currPage - 1 * MOVIE_COUNT + lastPage.data.results.length;

          return fetchedMoviesCount === totalMovies
            ? undefined
            : currPage + 1;
        },
        select: data =>
          // removing duplicates and flattening the movies array before returning the data
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
            currPage - 1 * MOVIE_COUNT + lastPage.data.results.length;

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
              currPage - 1 * MOVIE_COUNT + lastPage.data.results.length;

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
            currPage - 1 * MOVIE_COUNT + lastPage.data.results.length;

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
