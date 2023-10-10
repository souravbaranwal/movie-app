import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-remix-icon';
import { View, TextInput, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

import { colors } from '../constants/colors';


export const SearchInput = ({ searchString, setSearchString }) => {
  const opacity = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 200 }),
    };
  });

  useEffect(() => {
    handleItemVisibility();
  }, []);

  const handleItemVisibility = () => {
    opacity.value = withSpring(1);
  };
  return (
    <Animated.View style={[styles.inputContainer, animatedStyle]}>
      <TextInput style={styles.input} value={searchString}
        placeholder="Search movie…"
        placeholderTextColor={colors.white}
        onChangeText={setSearchString} />
      <View style={styles.iconContainer}>
        <Icon name="search-line" size="16" color={colors.white} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 32,
    paddingLeft: 4,
    backgroundColor: colors.lightGrey,
    marginBottom: 16,
    marginTop: 8,
  },
  input: {
    height: 36,
    padding: 10,
    flex: 1,
    color: colors.black,
    fontSize: 14,
  },
  iconContainer: { backgroundColor: colors.accent, height: 36, width: 36, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 8, borderBottomRightRadius: 8 },
});

SearchInput.prototypes = {
  searchString: PropTypes.string.isRequired,
  setSearchString: PropTypes.func.isRequired,
};