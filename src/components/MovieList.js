import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, FlatList, Keyboard, } from 'react-native';

import { SearchInput } from './SearchInput';
import { MemoizedMovieCard } from './MovieCard';
import { EmptyPlaceholder } from './EmptyPlaceholder';
import { useIsFocused } from '@react-navigation/native';
import { generateEmptyArray, checkEquality } from '../utils';

const placeholderArray = generateEmptyArray(20);

export const MovieList = ({ movies, isLoading, refetch }) => {
  const [searchString, setSearchString] = useState('');
  const isFocused = useIsFocused();

  const keyExtractor = item => isLoading ? item : item.id;
  const renderItem = ({ item, index }) => isLoading ? <EmptyPlaceholder /> : <MemoizedMovieCard movie={item} index={index} />;

  const filteredMovies = movies?.filter(
    ({ title }) =>
      checkEquality(title, searchString)
  );
  if (!isFocused) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      <SearchInput setSearchString={setSearchString} searchString={searchString} />
      <FlatList
        data={isLoading ? placeholderArray : filteredMovies}
        renderItem={renderItem}
        style={styles.flatList}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        onRefresh={refetch}
        refreshing={false}
        onScrollBeginDrag={Keyboard.dismiss}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={styles.separator}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  separator: {
    marginBottom: 16,
  },
});

MovieList.prototypes = {
  movies: PropTypes.array,
  refetch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};