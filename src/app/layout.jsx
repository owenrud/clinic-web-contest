import { Inter } from "next/font/google";
import "./globals.css";
import Navbarcomponents from "@/components/Navbar";
import FooterComponent from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Syndey Speech Clinic",
  description: "Syndey Speech Clinic | Speech Pathology Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <Navbarcomponents/>
        {children}
        
        </body>
    </html>
  );
}
