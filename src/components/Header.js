import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

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
