
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { BookingProvider } from "@/context/BookingContext";
import { ServiceProvider } from "@/context/ServiceContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NearTask",
  description: "Find trusted local service providers near you.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BookingProvider>
          <ServiceProvider>
            {children}
          </ServiceProvider>
        </BookingProvider>
      </body>
    </html>
  );
}
