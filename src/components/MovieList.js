import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


export const MovieList = ({ movies, isLoading, refetch }) => {


  const keyExtractor = item => item.id;


  const renderItem = ({ item }) => {
    return (<View>
      <Text>{item.title}</Text>
    </View>);
  };


  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        style={styles.flatList}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        onRefresh={refetch}
        refreshing={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  flatList: {
  }
});