import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TiniqNafas | Master Klass",
  description:
    "Tabiiy sog‘lomlashtirish metodikasi haqida ma'lumot — Sardorbek Isroilov va Doktor Mahmudovdan master klass.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
