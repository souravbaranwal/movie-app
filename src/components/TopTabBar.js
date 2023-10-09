import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../constants/colors';

export const TopTabBar = ({ state, descriptors, navigation }) => {

  return (
    <View
      style={styles.mainContainer}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          const event = navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={0.6}
            style={[styles.tab, { backgroundColor: isFocused ? colors.accent : colors.dark, }]}
          >
            <View flexDirection="row">
              <Text style={[styles.label, { fontWeight: isFocused ? '500' : 'normal' }]}
              >
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
    padding: 4,
    gap: 4,
  },
  tab: {
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  label: {
    color: colors.white,
    padding: 4,
    fontSize: 14
  }
});

TopTabBar.propTypes = {
  state: PropTypes.object.isRequired,
  descriptors: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};