import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NowPlayingMovies, PopularMovies, TopRatedMovies, UpcomingMovies } from '../components';
// import { updateCountAction } from '../redux/slices/count';
import { TopTabBar } from '../components';
import { screenNames } from '../navigation/ScreenNames';
import { colors } from '../constants/colors';

const Tab = createMaterialTopTabNavigator();


export const HomeScreen = () => {
  // const dispatch = useDispatch();

  // const num = useSelector(state => state.count.count.count);
  // const handleCountUpdate = () => {
  //   dispatch(updateCountAction({ count: num + 1 }));
  // };

  return (
    <View style={styles.mainContainer}>
      <Text>Movies APP</Text>
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          // screenOptions={{
          //   style: { paddingHorizontal: 50 },
          //   renderIndicator: () => null,
          // }}
          tabBar={props => <TopTabBar {...props} />}
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: { width: 100 },
            tabBarStyle: { backgroundColor: 'powderblue', },
          }}
        >
          <Tab.Screen name={screenNames.NowPlaying} component={NowPlayingMovies} />
          <Tab.Screen name={screenNames.Popular} component={PopularMovies} />
          <Tab.Screen name={screenNames.Top} component={TopRatedMovies} />
          <Tab.Screen name={screenNames.Upcoming} component={UpcomingMovies} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white
  }
});