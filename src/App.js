import React from 'react';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from 'react-query';

import Store, { Persistor } from './redux/store';
import { AppNavigator } from './navigation/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <QueryClientProvider client={queryClient}>
          <AppNavigator />
          <Toast />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
