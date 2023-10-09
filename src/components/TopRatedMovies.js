import React, { useCallback } from 'react';
import { useQueryClient } from 'react-query';
import { View, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { MovieList } from './MovieList';
import { colors } from '../constants/colors';
import { useMovies } from '../hooks/query/useMovies';
import { queryKeys } from '../hooks/query/queryKeys';

export const TopRatedMovies = () => {
  const queryClient = useQueryClient();
  const { useGetTopRated } = useMovies();
  const { data: movies, isLoading, refetch } = useGetTopRated();

  useFocusEffect(
    useCallback(() => {
      queryClient.invalidateQueries(queryKeys.TOP_RATED);
    }, [])
  );

  return (
    <View style={styles.mainContainer}>
      <Text>Top Rated movies</Text>
      <MovieList movies={movies} isLoading={isLoading} refetch={refetch} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white
  }
});