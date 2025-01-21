import React from 'react';
import QueryProvider from './query-provider';
import ReduxProvider from './redux-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </QueryProvider>
  );
};

export default Providers;
