/** @format */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Saakshi Raut",
  description: "Web3 Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex justify-center min-w-screen">
        <div className="px-4 w-full lg:w-4/6">
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
