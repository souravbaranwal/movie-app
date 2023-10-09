import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from '../screens';
import { screenNames } from './ScreenNames';

const Stack = createStackNavigator();

export const AppNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name={screenNames.Home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
