import { Tinos } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tinos",
});

export const metadata = {
  title: "Fertility",
  description: "Fertility focused website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tinos.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
