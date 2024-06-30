import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   title: 'Thrasher',
   description: 'Who is this guy?',
};

export default function RootLayout({ children }) {
   return (
      <html lang="tr">
         <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://thrasher.fun" />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content="https://twitter.com/thrasherflu/header_photo" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://x.com/thrasherflu" />
            <meta property="twitter:title" content={metadata.title} />
            <meta property="twitter:description" content={metadata.description} />
            <meta property="twitter:image" content="https://twitter.com/thrasherflu/header_photo" />

            <link rel="icon" href="/favicon.png" />
         </head>
         <body className={`bg-gray-900 ${inter.className}`}>{children}</body>
      </html>
   );
}
