import Footer from '@/Components/common/footer';
import Navbar from '@/Components/common/Navbar';
import Providers from '@/providers';
import { Metadata } from 'next';
import './globals.css';

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
        <Providers>
          <div
            className={`antialiased flex h-full w-full flex-col min-h-screen justify-between`}
          >
            <Navbar />
            <div className='!h-full min-h-[60dvh]'>{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
// px-6 md:px-12 xl:px-24
