import { Inter, Outfit } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://mountainfaunalover.com"),
  title: {
    default: "Mountain & Fauna Lover | Avvistamenti Cervi e Fauna in Trentino Alto Adige",
    template: "%s | Mountain & Fauna Lover",
  },
  description: "La guida definitiva per avvistamenti cervi e fauna in Val di Rabbi e Val di Sole. Escursioni in e-bike, trekking, e consigli da local per vivere la natura selvaggia del Trentino. Recensioni Swarovski Optik.",
  keywords: [
    "avvistamenti cervi trentino",
    "fauna val di rabbi",
    "escursioni ebike val di sole",
    "trekking val di rabbi",
    "consigli local val di rabbi",
    "swarovski optik recensioni",
    "fotografia naturalistica trentino",
    "simone mattioli",
  ],
  authors: [{ name: "Simone Mattioli" }],
  creator: "Simone Mattioli",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://mountainfaunalover.com",
    title: "Mountain & Fauna Lover | Avvistamenti Cervi e Natura in Trentino",
    description: "Scopri la Val di Rabbi e la Val di Sole con gli occhi di un local. Avvistamenti fauna, percorsi e-bike e trekking unici.",
    siteName: "Mountain & Fauna Lover",
    images: [
      {
        url: "/images/home/background.jpg",
        width: 1200,
        height: 630,
        alt: "Mountain & Fauna Lover - Val di Rabbi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mountain & Fauna Lover | Avventura in Val di Rabbi",
    description: "Avvistamenti cervi, e-bike e natura selvaggia in Trentino.",
    images: ["/images/home/background.jpg"],
    creator: "@simonemattioli", // Placeholder, update if user has handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  );
}
