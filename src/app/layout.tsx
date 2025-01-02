import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Layout from '../components/navbar/Layout';
import { Suspense } from 'react';
import Loading from './loading';
import Script from 'next/script';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Saida',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = 'G-P6BQXSV306';
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black">
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script id="ga-script" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  debug_mode: true, 
                });
              `}
            </Script>
          </>
        )}
        <Suspense fallback={<Loading />}>
          <Layout>{children}</Layout>
        </Suspense>
      </body>
    </html>
  );
}
