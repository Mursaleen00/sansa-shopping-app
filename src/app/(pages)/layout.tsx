// React import
import React from 'react';

// Layout;
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className='py-10 px-6 md:px-12 xl:px-24'>{children}</div>;
};

export default Layout;
