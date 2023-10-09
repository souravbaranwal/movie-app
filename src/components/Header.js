import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const Header = ({ title }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8
  },
  title: {
    fontWeight: '600',
    fontSize: 20
  }
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
