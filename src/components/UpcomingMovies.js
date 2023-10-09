import React, { useCallback } from 'react';
import { useQueryClient } from 'react-query';
import { View, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { useMovies } from '../hooks/query/useMovies';
import { queryKeys } from '../hooks/query/queryKeys';
import { MovieList } from './MovieList';
import { colors } from '../constants/colors';



export const UpcomingMovies = () => {
  const queryClient = useQueryClient();
  const { useGetUpcoming } = useMovies();
  const { data: movies, isLoading, refetch } = useGetUpcoming();

  useFocusEffect(
    useCallback(() => {
      queryClient.invalidateQueries(queryKeys.UPCOMING);
    }, [])
  );

  return (
    <View style={styles.mainContainer}>
      <Text>Upcoming movies</Text>
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