import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/footer/page';

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
        <div className='!h-full min-h-[50dvh] py-10'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
// px-6 md:px-12 xl:px-24
