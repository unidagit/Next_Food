"use client";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/NavBar";
import Provider from "../provider/Provider";
import "../styles/globals.css";
import { textFont } from "../utils/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={textFont.className}>
      <head />
      <body>
        <div className="container">
          <Navbar />
          <Provider>{children}</Provider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
