import { Inter, JetBrains_Mono } from 'next/font/google';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  fallback: ['system-ui', 'arial'],
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  fallback: ['system-ui', 'arial'],
});

// Define the italic font separately by providing a custom font URL
const fontItalic = {
  variable: '--font-italic',
  urls: [
    'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400&display=swap',
  ],
  fallback: ['system-ui', 'arial'],
};

export const fonts = [
  fontSans.variable,
  fontMono.variable,
  fontItalic.variable,
];
