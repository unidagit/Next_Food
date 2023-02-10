"use client";
import "../styles/globals.css";
import { Roboto } from "@next/font/google";
import Provider from "../provider/Provider";
import Navbar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={roboto.className}>
      <head />
      <body>
        <div className="container">
          <Provider>
            <Navbar />
            {children}
          </Provider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
