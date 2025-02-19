import type { Metadata } from "next";

import { Roboto } from 'next/font/google';


import "./globals.css";
import Navigation from "./components/navigation";
import Hero from "./components/Hero";
import BackgroundVideo from "./components/BackgroundVideo";



const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'], // Include all desired weights
  subsets: ['latin'],     // Specify subsets as needed
  display: 'swap',        // Optional: control font display behavior
});
export const metadata: Metadata = {
  title: "Rudraksha Seva",
  description: "Authentic Rudraksha, Astrology, Vastu, and Gemstone Services",
  icons: {
    icon: "/logo.jpg", // Standard favicon
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
      <div className="relative w-full h-screen overflow-hidden">
          <BackgroundVideo/>
          {/* Overlay (Optional for Darkening Video) */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10">
            <Navigation />
            <Hero />
          </div>
        </div>
        {children}
        
      </body>
    </html>
  );
}
