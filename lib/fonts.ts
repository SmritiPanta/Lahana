import { EB_Garamond as FontSans, Roboto_Condensed ,Inter} from 'next/font/google';
import localFont from 'next/font/local';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontDisplay = localFont({
  src: '../public/fonts/Robinson-Press-400.otf',
  variable: '--font-display',
  display: 'swap',
});

export const fontHeading = localFont({
  src: '../public/fonts/verbcondregular-webfont.woff',
  variable: '--font-heading',
  display: 'swap',
});

export const fontRoboto = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-sans',
});
export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});