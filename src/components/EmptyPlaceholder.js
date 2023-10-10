import React from 'react';
import { StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const EmptyPlaceholder = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View style={styles.placeholder} />
    </SkeletonPlaceholder>
  );
};

const styles = StyleSheet.create({
  placeholder: { height: 110, marginHorizontal: 16, borderRadius: 8 }
});