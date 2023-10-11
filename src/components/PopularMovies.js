import React, { useCallback } from 'react';
import { useQueryClient } from 'react-query';
import { View, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { MovieList } from './MovieList';
import { colors } from '../constants/colors';
import { useMovies } from '../hooks/query/useMovies';
import { queryKeys } from '../hooks/query/queryKeys';

export const PopularMovies = () => {
  // The queryClient is a part of React Query and is used to interact with the query cache. In our specific case, it's used to invalidate queries (e.g., refresh the API data) when the screen regains focus. Note that in many scenarios, such as data with a predictable stale time, you can avoid manual invalidation by setting the `staleTime` value directly in the respective query hook under the `useMovies` hook. This can help streamline data management and avoid the need for manual invalidation.
  const queryClient = useQueryClient();
  const { useGetPopular } = useMovies();
  const { data: movies, isLoading, refetch, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetPopular();

  // Refreshing the query whenever the screen is in focus.
  useFocusEffect(
    useCallback(() => {
      queryClient.invalidateQueries(queryKeys.POPULAR);
    }, [])
  );

  return (
    <View style={styles.mainContainer}>
      <MovieList movies={movies}
        isLoading={isLoading}
        refetch={refetch}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white
  }
});