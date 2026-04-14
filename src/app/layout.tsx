import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const libre = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-libre",
});

export const metadata: Metadata = {
  title: "Payal | Product Designer & Data Analyst",
  description: "Portfolio of Payal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${libre.variable} bg-portfolio-bg text-portfolio-red antialiased`}>
        {children}
      </body>
    </html>
  );
}