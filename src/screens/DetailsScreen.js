import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Header } from '../components';
import { colors } from '../constants/colors';


export const DetailsScreen = () => {
  const { params: { movie } } = useRoute();
  return (
    <View style={styles.mainContainer}>
      <Header title={movie.title} />

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white
  }
});