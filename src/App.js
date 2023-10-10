import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Store, { Persistor } from './redux/store';
import { AppNavigator } from './navigation/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={styles.mainContainer}>
            <AppNavigator />
          </GestureHandlerRootView>
          <Toast />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});
