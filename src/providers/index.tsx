// src/providers/index.tsx

// React Imports
import React from 'react';
import { Toaster } from 'react-hot-toast';

// Providers Import
import QueryProvider from './query-provider';
import ReduxProvider from './redux-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    // QueryProvider
    <QueryProvider>
      {/* Redux  */}
      <ReduxProvider>
        <Toaster />
        {children}
      </ReduxProvider>
    </QueryProvider>
  );
};

export default Providers;
