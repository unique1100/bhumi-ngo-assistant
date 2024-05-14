import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"

import { TRPCReactProvider } from "@/trpc/react";
import Footer from "./_components/Footer";
import NavBar from "./_components/NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={`font-sans ${inter.variable} p-4`}>
      <NavBar/>
      <Toaster />


        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer/>
      </body>
    </html>
  );
}
