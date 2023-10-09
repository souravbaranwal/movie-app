import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { colors } from '../constants/colors';
import { screenNames } from '../navigation/ScreenNames';
import { NowPlayingMovies, PopularMovies, TopRatedMovies, UpcomingMovies, TopTabBar, Header } from '../components';

const Tab = createMaterialTopTabNavigator();

export const HomeScreen = () => {

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header title="Superflix" />
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          tabBar={props => <TopTabBar {...props} />}
        >
          <Tab.Screen name={screenNames.NowPlaying} component={NowPlayingMovies} />
          <Tab.Screen name={screenNames.Popular} component={PopularMovies} />
          <Tab.Screen name={screenNames.Top} component={TopRatedMovies} />
          <Tab.Screen name={screenNames.Upcoming} component={UpcomingMovies} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
});