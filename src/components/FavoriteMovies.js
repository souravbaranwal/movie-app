import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { MovieList } from './MovieList';
import { colors } from '../constants/colors';


export const FavoriteMovies = () => {
  const favoriteMovies = useSelector(({ moviesReducer: { favoriteMovies } }) => favoriteMovies);

  return (
    <View style={styles.mainContainer}>
      <MovieList movies={favoriteMovies} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white
  }
});