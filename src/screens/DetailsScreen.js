import React from 'react';
import Icon from 'react-native-remix-icon';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, StyleSheet, ImageBackground, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native';

import { colors } from '../constants/colors';


export const DetailsScreen = () => {
  const { params: { movie: { title, backdrop_path, release_date, vote_average, overview, poster_path } } } = useRoute();
  const { height, width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/original/${backdrop_path}` }} resizeMode="cover" style={[styles.backdrop, { width, height: height / 2, paddingTop: insets.top }]}>
        <TouchableOpacity activeOpacity={0.6} onPress={navigation.goBack} style={[styles.backIcon, { top: insets.top }]}>
          <Icon name="arrow-left-fill" size="32" color={colors.white} />
        </TouchableOpacity>
        <Image source={{ uri: `https://image.tmdb.org/t/p/original/${poster_path}` }} resizeMode="cover" style={[styles.poster]} />
      </ImageBackground>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Release Date: <Text style={styles.value}>{release_date}</Text></Text>
        <Text style={styles.label}>Rating: <Text style={styles.value}>{vote_average}</Text></Text>
        <Text style={styles.label}>Description: <Text style={styles.value}>{overview}</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backdrop: {
    padding: 16,
    position: 'relative'
  },

  poster: {
    width: 100, height: 140, resizeMode: 'cover', borderRadius: 8, position: 'absolute', bottom: -70, left: 16
  },
  infoContainer: { marginTop: 66, padding: 16 },
  backIcon: {
    position: 'absolute',
    left: 16,
    borderRadius: 8,
    padding: 6,
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