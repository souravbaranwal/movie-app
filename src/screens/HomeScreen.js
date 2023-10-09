import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateCountAction } from '../redux/slices/count';
import { useMovies } from '../hooks/query/useMovies';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { useGetNowPlaying } = useMovies();
  const { data: movies, isLoading } = useGetNowPlaying();
  console.log(JSON.stringify(movies, null, 2), 'movies');
  console.log(isLoading, 'isLoading');

  const num = useSelector(state => state.count.count.count);
  const handleCountUpdate = () => {
    dispatch(updateCountAction({ count: num + 1 }));
  };

  return (
    <View>
      <Text>Test Screen</Text>
      <TouchableOpacity onPress={handleCountUpdate}><Text>
        {`count: ${num}`}
      </Text></TouchableOpacity>
    </View>
  );
};
