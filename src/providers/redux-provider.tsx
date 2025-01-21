'use client';

import store, { persister } from '@/store/store';
// redux-provider.tsx
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

interface IReduxProviderProps {
  children: ReactNode;
}
const ReduxProvider: FC<IReduxProviderProps> = ({ children }) => (
  <Provider store={store}>
    <PersistGate
      persistor={persister}
      loading={null}
    >
      {children}
    </PersistGate>
  </Provider>
);

export default ReduxProvider;
