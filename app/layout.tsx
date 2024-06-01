import type {Metadata} from 'next';
import './globals.css';
import {siteConfig} from '@/config/site';
import {Navbar} from '@/components/Layouts/Navbar/Navbar';
import {Footer} from '@/components/Layouts/Footer';
import {ClashDisplay, Satoshi} from '@/lib/Font';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: '%s | Avion',
  },
  description: siteConfig.description,
  keywords: siteConfig.keyWords.join(', '),
  icons: {
    icon: '/assets/svg/Cart.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${Satoshi.className} ${ClashDisplay.variable} font-satoshi min-h-screen flex flex-col `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
