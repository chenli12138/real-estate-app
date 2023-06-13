import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Le Vision Atelier",
  description: "Le Vision Atelier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white inset-0">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
