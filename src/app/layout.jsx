import {Inter} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {ReactLenis} from "@/utils/lenis";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
import "./globals.scss";

<Head>
<meta name="apple-mobile-web-app-title" content="XIANZE`25" />
</Head>

export const metadata = {
  title: "Xianze | Home",
  description: "Xianze - An inter-college event featuring a mix of technical and non-technical competitions, challenges, and activities.",
};

const inter = Inter({ subsets: ["latin"] }); 

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <ReactLenis root>
      <body className={inter.className}>
        <Navbar />
          {children}
          <Footer />
      </body>
      </ReactLenis>
    </html>
  );
}