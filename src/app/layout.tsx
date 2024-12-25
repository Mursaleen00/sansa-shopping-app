import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/Components/Navbar';

const roboto = Roboto({
  variable: '--font-geist-sans',
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
    <html lang='en'>
      <body
        className={`${roboto.variable} antialiased flex h-full flex-col min-h-screen justify-between gap-y-6 md:gap-y-10`}
      >
        <Navbar />
        {/* <div className='sticky top-0 bg-white h-[72px] border'>Navbar</div> */}
        <div className='!h-full min-h-[50dvh] px-6 md:px-12 xl:px-24'>
          {children}
        </div>
        <div className='h-[450px] border  '>Footer</div>
      </body>
    </html>
  );
}
