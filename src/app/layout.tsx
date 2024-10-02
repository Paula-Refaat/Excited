import '@/app/globals.css';
import { Metadata } from 'next';
import { Alexandria } from 'next/font/google';
import React from 'react';
const alexandria = Alexandria({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  fallback: ['sans-serif'],
});
export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  title: 'Nextjs Starter Template',
  description: 'Nextjs Starter Template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body
        className={`bg-foreground text-background text-foreground antialiased ${alexandria.className}`}
      >
        {children}
      </body>
    </html>
  );
}
