import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-remix-icon';
import { View, TextInput, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { colors } from '../constants/colors';


export const SearchInput = ({ searchString, setSearchString }) => {

  return (
    <Animatable.View style={[styles.inputContainer]} animation="fadeIn" useNativeDriver
      duration={1000}
      delay={300}>
      <TextInput style={styles.input} value={searchString}
        placeholder="Search movie…"
        placeholderTextColor={colors.white}
        onChangeText={setSearchString} />
      <View style={styles.iconContainer}>
        <Icon name="search-line" size="16" color={colors.white} />
      </View>
    </Animatable.View>
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