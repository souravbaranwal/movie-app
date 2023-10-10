import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

import { colors } from '../constants/colors';
import { screenNames } from '../navigation/ScreenNames';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const movieCard = ({ movie, index }) => {
  const navigation = useNavigation();
  const { title, release_date, vote_average, poster_path } = movie;

  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 300 * index }),
    };
  });

  useFocusEffect(
    useCallback(() => {
      handleItemVisibility();
    }, [])
  );

  const handleItemVisibility = () => {
    opacity.value = withSpring(1);
  };

  const handleNavigation = () => {
    navigation.navigate(screenNames.Details, { movie });
  };

  return (<AnimatedPressable onPress={handleNavigation}
    onLongPress={handleNavigation}
    style={[styles.movieCard, animatedStyle]}>
    <FastImage source={{
      uri: `https://image.tmdb.org/t/p/original/${poster_path}`, priority: FastImage.priority.high,
    }} style={styles.poster} accessibilityLabel={`${title} poster`} alt={`${title} poster`} resizeMode={FastImage.resizeMode.cover} />
    <View style={styles.movieInfoContainer}>
      <Text style={styles.title} numberOfLines={1}
      >{title}</Text>
      <Text style={styles.label}>Release Date: <Text style={styles.value}>{release_date}</Text></Text>
      <Text style={styles.label}>Rating: <Text style={styles.value}>{vote_average}</Text></Text>
    </View>
  </AnimatedPressable>);
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
  poster: { width: 80, height: 110, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
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