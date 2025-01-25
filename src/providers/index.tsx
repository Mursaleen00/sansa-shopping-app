import React from 'react';
import { Toaster } from 'react-hot-toast';
import QueryProvider from './query-provider';
import ReduxProvider from './redux-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <ReduxProvider>
        <Toaster />
        {children}
      </ReduxProvider>
    </QueryProvider>
  );
};

export default Providers;
