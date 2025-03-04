/** @format */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
