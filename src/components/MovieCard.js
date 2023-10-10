import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { colors } from '../constants/colors';
import { screenNames } from '../navigation/ScreenNames';


const movieCard = ({ movie }) => {
  const navigation = useNavigation();
  const { title, release_date, vote_average, poster_path } = movie;

  return (<TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate(screenNames.Details, { movie })} style={[styles.movieCard]}>
    <Image source={{ uri: `https://image.tmdb.org/t/p/original/${poster_path}` }}
      style={styles.poster} accessibilityLabel={`${title} poster`} alt={`${title} poster`} />
    <View style={styles.movieInfoContainer}>
      <Text style={styles.title} numberOfLines={1}
      >{title}</Text>
      <Text style={styles.label}>Release Date: <Text style={styles.value}>{release_date}</Text></Text>
      <Text style={styles.label}>Rating: <Text style={styles.value}>{vote_average}</Text></Text>
    </View>
  </TouchableOpacity>);
};

export const MemoizedMovieCard = memo(movieCard);


const styles = StyleSheet.create({
  movieCard: {
    backgroundColor: 'white',
    height: 110,
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
    padding: 8,
    flex: 1
  },
  poster: { width: 80, height: 110, resizeMode: 'cover', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: colors.black
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

movieCard.prototypes = {
  movie: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};