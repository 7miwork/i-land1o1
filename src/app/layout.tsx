import { ReactNode } from 'react';

// Root layout: redirects to default locale
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}