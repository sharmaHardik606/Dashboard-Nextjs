import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const RobotoSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WhatBytes Dashboard",
  description: "Assignment Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col"> 
        <Header />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
