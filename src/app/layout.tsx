import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Footer from '@/Components/common/footer';
import Navbar from '@/Components/common/Navbar';
import Notfound from '@/Components/common/notfound';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

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
    <html
      lang='en'
      className={roboto.className}
    >
      <body
        className={`antialiased flex h-full w-full flex-col min-h-screen justify-between`}
      >
        <Navbar />
        <div className='!h-full min-h-[50dvh]'>{children}</div>
        <Footer />
        <Notfound/>
      </body>
    </html>
  );
}
// px-6 md:px-12 xl:px-24
