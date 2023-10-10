import React, { useCallback } from 'react';
import { useQueryClient } from 'react-query';
import { View, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { MovieList } from './MovieList';
import { colors } from '../constants/colors';
import { useMovies } from '../hooks/query/useMovies';
import { queryKeys } from '../hooks/query/queryKeys';

export const NowPlayingMovies = () => {
  const queryClient = useQueryClient();
  const { useGetNowPlaying } = useMovies();
  const { data: movies, isLoading, refetch, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetNowPlaying();

  useFocusEffect(
    useCallback(() => {
      queryClient.invalidateQueries(queryKeys.NOW_PLAYING);
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