import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../constants/colors';


export const DetailsScreen = () => {
  const { params: { movie: { title, poster_path, release_date, vote_average, overview } } } = useRoute();
  const { height, width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/original/${poster_path}` }} resizeMode="cover" style={[styles.poster, { width, height, paddingTop: insets.top }]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Release Date: <Text style={styles.value}>{release_date}</Text></Text>
        <Text style={styles.label}>Rating: <Text style={styles.value}>{vote_average}</Text></Text>
        <Text style={styles.label}>Description: <Text style={styles.value}>{overview}</Text></Text>
      </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  poster: {
    flex: 1,
    padding: 16
  },
  title: {
    color: colors.dark,
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