import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { AppNavigator } from './navigation/AppNavigator';

import { QueryClient, QueryClientProvider } from 'react-query';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Store, { Persistor } from './redux/store';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <QueryClientProvider client={queryClient}>
            <AppNavigator />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
