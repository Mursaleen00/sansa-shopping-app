import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/Components/Navbar';

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
        className={`antialiased flex h-full w-full flex-col min-h-screen justify-between gap-y-6 md:gap-y-10`}
      >
        {/* <div className='sticky top-0 bg-white h-[72px] border'>Navbar</div> */}
        <Navbar />
        <div className='!h-full min-h-[50dvh]'>{children}</div>
        <div className='h-[450px] border'>Footer</div>
      </body>
    </html>
  );
}
