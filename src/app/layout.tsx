import Navbar from '@/components/Navbar';
import ToastProvider from '@/providers/ToastProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '야, 교통 어때?',
  description: '버스와 열차 및 기차 시간표 및 가격 조회 서비스 야, 교통 어때?',
  applicationName: '야, 교통 어때',
  appleWebApp: {
    title: '야, 교통 어때?',
    capable: true,
    statusBarStyle: 'default'
  }
};

function RootLayout({ children, modal }: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <Navbar />
          {children}
          {modal}
        </ToastProvider>
      </body>
    </html>
  );
}
export default RootLayout;
