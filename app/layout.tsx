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
  title: 'FOCFHWTWD | Foundations of Computing',
  description: 'Foundations Of Computing, From HardWare To WebDesign - KTU 2024 Scheme',
  openGraph: {
    title: 'FOCFHWTWD Learning Platform',
    description: 'Master Foundations of Computing from Hardware to Web Design.',
    type: 'website',
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="https://hexnicai.vercel.app/favicon.ico" />
      </head>
      <body className="font-sans antialiased bg-[#fdfdfd] text-[#1a1a1a]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
