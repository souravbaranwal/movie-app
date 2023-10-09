import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { screenNames } from './ScreenNames';
import { DetailsScreen, HomeScreen } from '../screens';

const Stack = createStackNavigator();

export const AppNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name={screenNames.Home} component={HomeScreen} />
        <Stack.Screen name={screenNames.Details} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
