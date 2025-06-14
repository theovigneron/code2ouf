import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Hello Fresh 90 € | Offre Spéciale",
  description: "Profitez de -90€ sur votre première commande HelloFresh. Découvrez des recettes fraîches et délicieuses livrées chez vous. Offre limitée !",
  keywords: "HelloFresh, code promo, réduction, cuisine, recettes, livraison repas, -90€, offre spéciale",
  authors: [{ name: "Code2Ouf" }],
  creator: "Code2Ouf",
  publisher: "Code2Ouf",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.code2ouf.fr/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Code Hello Fresh 90 € | Offre Spéciale",
    description: "Profitez de -90€ sur votre première commande HelloFresh. Découvrez des recettes fraîches et délicieuses livrées chez vous.",
    url: 'https://www.code2ouf.fr/',
    siteName: 'Code Hello Fresh',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HelloFresh - Offre Spéciale -90€',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Code Hello Fresh 90 € | Offre Spéciale",
    description: "Profitez de -90€ sur votre première commande HelloFresh. Découvrez des recettes fraîches et délicieuses livrées chez vous.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification-google',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17200470046"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17200470046');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-17200470046/LEB7CLientoaEJ6w6YlA',
                    'value': 1.0,
                    'currency': 'EUR',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
