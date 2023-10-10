import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, Text, View, StyleSheet, Keyboard, RefreshControl } from 'react-native';

import { SearchInput } from './SearchInput';
import { colors } from '../constants/colors';
import { MemoizedMovieCard } from './MovieCard';
import { EmptyPlaceholder } from './EmptyPlaceholder';
import { useIsFocused } from '@react-navigation/native';
import { generateEmptyArray, checkEquality } from '../utils';
import { useRefreshByUser } from '../hooks/useRefreshByUser';

const placeholderArray = generateEmptyArray(20);

export const MovieList = ({ movies = [], isLoading = false, refetch = () => { }, fetchNextPage, hasNextPage, isFetchingNextPage }) => {
  const isFocused = useIsFocused();
  const [searchString, setSearchString] = useState('');
  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);

  const keyExtractor = item => isLoading ? item : item.id;
  const renderItem = ({ item, index }) => isLoading ? <EmptyPlaceholder /> : <MemoizedMovieCard movie={item} index={index} />;

  const filteredMovies = movies?.filter(
    ({ title }) =>
      checkEquality(title, searchString)
  );

  const handleLoadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderFooter = () => (
    <View style={styles.footer}>
      <ActivityIndicator color={colors.accent} size="small" />
    </View>
  );


  if (!isFocused) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      <SearchInput setSearchString={setSearchString} searchString={searchString} />
      <FlashList
        data={isLoading ? placeholderArray : filteredMovies}
        renderItem={renderItem}
        style={styles.flatList}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={isFetchingNextPage && renderFooter}
        onRefresh={refetch}
        refreshing={false}
        onScrollBeginDrag={Keyboard.dismiss}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={1}
        estimatedItemSize={120}
        refreshControl={
          <RefreshControl
            refreshing={isRefetchingByUser}
            onRefresh={refetchByUser}
          />
        }
        ItemSeparatorComponent={() => {
          return (
            <View
              style={styles.separator}
            />
          );
        }}
        ListEmptyComponent={
          <View style={{ alignItems: 'center' }}>
            <Text>There are no movies to show.</Text>
          </View>
        }
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
  footer: {
    marginHorizontal: 16
  }
});

MovieList.prototypes = {
  movies: PropTypes.array.isRequired,
  refetch: PropTypes.func,
  isLoading: PropTypes.bool,
  fetchNextPage: PropTypes.func,
  hasNextPage: PropTypes.bool,
  isFetchingNextPage: PropTypes.bool
};