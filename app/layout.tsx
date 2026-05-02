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
  title: 'FOCFHWTWD | KTU 2024 Scheme',
  description: 'Foundations Of Computing, From HardWare To WebDesign - KTU 2024 Scheme',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💻</text></svg>',
  },
  openGraph: {
    title: 'FOCFHWTWD | KTU 2024 Scheme',
    description: 'Foundations Of Computing, From HardWare To WebDesign - KTU 2024 Scheme. Created by Aaron Thalakkottor Sooraj. A part of HexnicAI, a part of ATS_PDZ.',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Computer Hardware and Code',
      }
    ]
  }
};

import { ThemeProvider } from '@/lib/theme-context';
import { ThemeSwitcher } from '@/components/theme-switcher';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💻</text></svg>' type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
