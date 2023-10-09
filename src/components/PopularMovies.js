import React, { useCallback } from 'react';
import { useQueryClient } from 'react-query';
import { View, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { colors } from '../constants/colors';
import { MovieList } from './MovieList';
import { useMovies } from '../hooks/query/useMovies';
import { queryKeys } from '../hooks/query/queryKeys';

export const PopularMovies = () => {
  const queryClient = useQueryClient();
  const { useGetPopular } = useMovies();
  const { data: movies, isLoading, refetch } = useGetPopular();

  useFocusEffect(
    useCallback(() => {
      queryClient.invalidateQueries(queryKeys.POPULAR);
    }, [])
  );

  return (
    <View style={styles.mainContainer}>
      <Text>Popular Movies</Text>
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