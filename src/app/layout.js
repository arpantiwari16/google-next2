import { Inter } from "next/font/google";
import "./globals.css";
// import Footer from "@/components/Footer";
import FooterSearch from "@/components/FooterSearch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google clone",
  description: "an open source clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>{children}
      <FooterSearch/></body>
    </html>
  );
}
