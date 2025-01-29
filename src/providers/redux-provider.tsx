// src/providers/redux-provider.tsx
'use client';

// Store Import
import store, { persister } from '@/store/store';

// React Import
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

// redux Import
import { PersistGate } from 'redux-persist/integration/react';

// Use interface IReduxProviderProps
interface IReduxProviderProps {
  children: ReactNode;
}

// ReduxProvider
const ReduxProvider: FC<IReduxProviderProps> = ({ children }) => (
  // Provider
  <Provider store={store}>
    {/* PersistGate  */}
    <PersistGate
      persistor={persister}
      loading={null}
    >
      {children}
    </PersistGate>
  </Provider>
);

export default ReduxProvider;
