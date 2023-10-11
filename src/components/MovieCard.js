import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Icon from 'react-native-remix-icon';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { colors } from '../constants/colors';
import { getImageUrl, isFavorite } from '../utils';
import { screenNames } from '../navigation/ScreenNames';





const MovieCard = ({ movie, index }) => {
  const navigation = useNavigation();
  const { title, release_date, vote_average, poster_path } = movie;
  const favoriteMovies = useSelector(({ moviesReducer: { favoriteMovies } }) => favoriteMovies);

  const handleNavigation = () => {
    navigation.navigate(screenNames.Details, { movie });
  };

  return (
    <Animatable.View animation="fadeInRight" useNativeDriver
      duration={1000}
      delay={index * 300}>
      <TouchableOpacity onPress={handleNavigation}
        onLongPress={handleNavigation}
        activeOpacity={0.6}
        style={styles.movieCard} >
        <FastImage source={{
          uri: getImageUrl(poster_path), priority: FastImage.priority.high,
        }} style={styles.poster} accessibilityLabel={`${title} poster`} alt={`${title} poster`} resizeMode={FastImage.resizeMode.cover} />
        <View style={styles.movieInfoContainer} >
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}
            >{title}</Text>
            <Icon name={`heart-2-${isFavorite(favoriteMovies, movie) ? 'fill' : 'line'}`} size="24" color={colors.red} />
          </View>
          <Text style={styles.label}>Release Date: <Text style={styles.value}>{release_date}</Text></Text>
          <Text style={styles.label}>Rating: <Text style={styles.value}>{vote_average}</Text></Text>
        </View>
      </ TouchableOpacity>
    </Animatable.View>
  );
};

export const MemoizedMovieCard = memo(MovieCard);


const styles = StyleSheet.create({
  movieCard: {
    backgroundColor: 'white',
    height: 110,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    marginHorizontal: 16,
    flexDirection: 'row'
  },
  movieInfoContainer: {
    padding: 8,
    flex: 1
  },
  poster: {
    width: 80,
    height: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: colors.black,
    width: '90%'
  },
  titleContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  value: {
    marginBottom: 4,
    color: colors.secondaryText,
    fontSize: 13,
    fontWeight: 'normal'
  },
  label: {
    marginBottom: 4,
    color: colors.secondaryText,
    fontSize: 13,
    fontWeight: '500'
  }
});

MovieCard.prototypes = {
  movie: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};