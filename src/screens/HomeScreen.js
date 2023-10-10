import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { colors } from '../constants/colors';
import { screenNames } from '../navigation/ScreenNames';
import { NowPlayingMovies, PopularMovies, TopRatedMovies, UpcomingMovies, Header } from '../components';

const Tab = createMaterialTopTabNavigator();

export const HomeScreen = () => {

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header title="Superflix" />
      <View style={styles.tabBarContainer}>
        <Tab.Navigator
          screenOptions={{
            tabBarScrollEnabled: true,
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: { width: 'auto' },
            tabBarActiveTintColor: colors.accent,
            tabBarInactiveTintColor: colors.black,
            tabBarIndicatorStyle: {
              backgroundColor: colors.accent
            },
            tabBarStyle: {
              marginHorizontal: 16, borderBottomWidth: 0, shadowColor: colors.white, elevation: 0
            },
          }}
        >
          <Tab.Screen name={screenNames.NowPlaying} component={NowPlayingMovies} />
          <Tab.Screen name={screenNames.Popular} component={PopularMovies} />
          <Tab.Screen name={screenNames.Top} component={TopRatedMovies} />
          <Tab.Screen name={screenNames.Upcoming} component={UpcomingMovies} />
          <Tab.Screen name={screenNames.Favorites} component={UpcomingMovies} />
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
  tabBarContainer: {
    flex: 1
  }
});