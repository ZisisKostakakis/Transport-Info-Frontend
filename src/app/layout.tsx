import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/navbar';
import { ClerkProvider } from '@clerk/nextjs/app-beta';
import './globals.css';

export const metadata = {
  title: 'Transport-Info',
  description: 'Get information about your transport',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          <script src="//kit.fontawesome.com/cfb314ea0a.js" async />
          <Navbar />
          {children}
          <Analytics />
        </body>
      </ClerkProvider>
    </html>
  );
}
