import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList, Keyboard, Image } from 'react-native';

import { colors } from '../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { screenNames } from '../navigation/ScreenNames';

const movieCard = ({ movie }) => {
  const navigation = useNavigation();
  const { title, release_date, vote_average, poster_path } = movie;

  return (<TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate(screenNames.Details, { movie })} style={styles.movieCard}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/original/${poster_path}` }}
        style={styles.poster} accessibilityLabel={`${title} poster`} alt={`${title} poster`} />
    </View>
    <View style={styles.movieInfoContainer}>
      <Text style={styles.title} numberOfLines={1}
      >{title}</Text>
      <Text style={styles.date}>{release_date}</Text>
      <Text style={styles.rating}>{vote_average}</Text>
    </View>
  </TouchableOpacity>);
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
    marginLeft: 8,
    flex: 1
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