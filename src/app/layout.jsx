import {Inter} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.scss";

export const metadata = {
  title: "Xianze | Home",
  description: "Xianze - An inter-college event featuring a mix of technical and non-technical competitions, challenges, and activities.",
};

const inter = Inter({ subsets: ["latin"] }); 

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}