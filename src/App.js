import React from 'react';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import { StyleSheet, SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import Store, { Persistor } from './redux/store';
import { AppNavigator } from './navigation/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <QueryClientProvider client={queryClient}>
            <AppNavigator />
            <Toast />
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
