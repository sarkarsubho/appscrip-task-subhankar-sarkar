import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/Home.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Discover Unique Fashion Products | Shop Bags, Shoes, Accessories Online.",
  description: "Explore a curated collection of stylish bags, trendy shoes, and accessories. Find high-quality, handcrafted products that fit your lifestyle. Shop now for exclusive deals and free shipping options!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body> */}
      <body>
        <TopBar></TopBar>
        <Navbar></Navbar>
        <Breadcrumbs />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
