import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, FlatList, Keyboard, Image } from 'react-native';

import { colors } from '../constants/colors';

const movieCard = ({ movie }) => {
  return (<View style={styles.movieCard}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
        style={styles.poster} accessibilityLabel={`${movie.title} poster`} alt={`${movie.title} poster`} />
    </View>
    <View style={styles.movieInfoContainer}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.date}>{movie.release_date}</Text>
      <Text style={styles.rating}>{movie.vote_average}</Text>
    </View>
  </View>);
};

const MemoizedMovieCard = memo(movieCard);


export const MovieList = ({ movies, isLoading, refetch }) => {
  console.log(isLoading, 'isLoading in Movielist component');

  const keyExtractor = item => item.id;
  const renderItem = ({ item }) => <MemoizedMovieCard movie={item} />;

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        style={styles.flatList}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        onRefresh={refetch}
        refreshing={false}
        onScrollBeginDrag={Keyboard.dismiss}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={styles.separator}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flatList: {
    paddingTop: 16,
  },
  movieCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginHorizontal: 16,
    flexDirection: 'row'
  },
  movieInfoContainer: {
    marginLeft: 8
  },
  poster: { width: 80, height: 110, resizeMode: 'contain', },
  separator: {
    marginBottom: 8,
  },
  imageContainer: {

  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 4,
    color: colors.black
  },
  date: {
    marginBottom: 4,
    color: colors.secondaryText,
    fontSize: 13
  },
  rating: {
    color: colors.secondaryText
  }
});

MovieList.prototypes = {
  movies: PropTypes.array,
  refetch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};