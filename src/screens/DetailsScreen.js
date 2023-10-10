import React from 'react';
import Icon from 'react-native-remix-icon';
import FastImage from 'react-native-fast-image';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

import { colors } from '../constants/colors';
import { getImageUrl, isFavorite } from '../utils';
import { updateFavoriteMovieAction } from '../redux/slices/movies';

export const DetailsScreen = () => {
  const dispatch = useDispatch();
  const { params: { movie } } = useRoute();
  const { height, width } = useWindowDimensions();

  const { title, backdrop_path, release_date, vote_average, overview, poster_path } = movie;
  const navigation = useNavigation();
  const favoriteMovies = useSelector(({ moviesReducer: { favoriteMovies } }) => favoriteMovies);

  const updateFavoriteMovie = () => {
    dispatch(updateFavoriteMovieAction(movie));
  };

  return (
    <View style={styles.fill}>
      <View style={{ width, height: height / 2 }}>
        <FastImage source={{
          uri: getImageUrl(backdrop_path), priority: FastImage.priority.high,
        }} style={styles.fill} accessibilityLabel={`${title} poster`} alt={`${title} poster`} resizeMode={FastImage.resizeMode.cover} />
        <TouchableOpacity activeOpacity={0.6} onPress={navigation.goBack} style={styles.backIcon}>
          <Icon name="arrow-left-line" size="24" color={colors.black} />
        </TouchableOpacity>
        <FastImage source={{
          uri: getImageUrl(poster_path), priority: FastImage.priority.high,
        }} style={styles.poster} accessibilityLabel={`${title} poster`} alt={`${title} poster`} resizeMode={FastImage.resizeMode.cover} />
        <TouchableOpacity activeOpacity={0.6} onPress={updateFavoriteMovie} style={styles.favoriteIcon}>
          <Icon name={`heart-2-${isFavorite(favoriteMovies, movie) ? 'fill' : 'line'}`} size="24" color={colors.red} />
        </TouchableOpacity>

      </View>
      <View style={styles.infoContainer} >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Release Date: <Text style={styles.value}>{release_date}</Text></Text>
        <Text style={styles.label}>Rating: <Text style={styles.value}>{vote_average}</Text></Text>
        <Text style={styles.label}>Description: <Text style={styles.value}>{overview}</Text></Text>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  backdrop: {
    padding: 16,
    position: 'relative'
  },

  poster: {
    width: 100, height: 140,
    resizeMode: 'cover',
    borderRadius: 8,
    position: 'absolute',
    bottom: -70, left: 16
  },
  infoContainer: { marginTop: 66, padding: 16 },
  backIcon: {
    position: 'absolute',
    left: 16,
    top: 16,
    borderRadius: 8,
    padding: 6,
    backgroundColor: colors.white
  },
  favoriteIcon: {
    position: 'absolute', bottom: -32, right: 16
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
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