// src\app\layout.tsx

// Component Import
import Footer from '@/Components/common/footer';

// Provider Import
import Providers from '@/providers';

// Next Import
import { Metadata } from 'next';

// Globals   CSS
import './globals.css';
import Navbar from '@/Components/common/navbar';

// Export metadata
export const metadata: Metadata = {
  title: 'Sansa',
  description: 'Best Shopping App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`antialiased flex h-full w-full flex-col min-h-screen justify-between scroll-smooth`}
      >
        {/* Provider  */}
        <Providers>
          <div
            className={`antialiased flex h-full w-full flex-col min-h-screen justify-between`}
          >
            {/* Navbar  */}
            <Navbar />
            <div className='!h-full min-h-[60dvh]'>{children}</div>
            {/* Footer  */}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
// px-6 md:px-12 xl:px-24
