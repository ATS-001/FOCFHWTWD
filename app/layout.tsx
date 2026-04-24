import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'FOCFHWTWD | From Hardware to Web Design',
  description: 'Foundations Of Computing, From HardWare To WebDesign - KTU 2024 Scheme',
  icons: {
    icon: 'https://hexnicai.vercel.app/favicon.ico',
    shortcut: 'https://hexnicai.vercel.app/favicon.ico',
    apple: 'https://hexnicai.vercel.app/favicon.ico',
  },
  openGraph: {
    title: 'FOCFHWTWD Learning Platform',
    description: 'Master Foundations of Computing from Hardware to Web Design.',
    type: 'website',
  }
};

import { ThemeProvider } from '@/lib/theme-context';
import { ThemeSwitcher } from '@/components/theme-switcher';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head />
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
