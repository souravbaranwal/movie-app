import React from 'react';
import Icon from 'react-native-remix-icon';
import { View, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../constants/colors';


export const SearchInput = ({ searchString, setSearchString }) => {

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} value={searchString}
        placeholder="Search movie…"
        placeholderTextColor={colors.white}
        onChangeText={setSearchString} />
      <View style={styles.iconContainer}>
        <Icon name="search-line" size="16" color={colors.white} />
      </View>
    </View>
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
    height: 32,
    padding: 10,
    flex: 1,
    color: colors.black,
    fontSize: 13,
  },
  iconContainer: { backgroundColor: colors.accent, height: 32, width: 32, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 8, borderBottomRightRadius: 8 },
});

SearchInput.prototypes = {
  searchString: PropTypes.string.isRequired,
  setSearchString: PropTypes.func.isRequired,
};