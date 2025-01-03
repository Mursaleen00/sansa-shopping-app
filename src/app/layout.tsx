import Footer from '@/Components/common/footer';
import Navbar from '@/Components/common/Navbar';
import Notfound from '@/Components/common/notfound';
import { Metadata } from 'next';
import './globals.css';
// import Shoppingbag from '../Components/common/shoppingbag';

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
        className={`antialiased flex h-full w-full flex-col min-h-screen justify-between`}
      >
        <Navbar />
        <div className='!h-full min-h-[50dvh] py-10'>{children}</div>
        <Footer />
        <Notfound />
        {/* <Shoppingbag /> */}
      </body>
    </html>
  );
}
// px-6 md:px-12 xl:px-24
