"use client";
import "../styles/globals.css";
import { Roboto } from "@next/font/google";
import Provider from "../provider/Provider";
import Navbar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import TopBar from "../components/topBar/TopBar";

import { createContext, useEffect, useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const HydrationContext = createContext(false);

  function HydrationProvider({ children }: { children: React.ReactNode }) {
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
      setHydrated(true);
    }, []);
    return (
      <HydrationContext.Provider value={hydrated}>
        {children}
      </HydrationContext.Provider>
    );
  }

  return (
    <html lang="ko" className={roboto.className}>
      <head />
      <body>
        <div className="container">
          <Provider>
            <HydrationProvider>
              <TopBar />
            </HydrationProvider>
            <Navbar />
            {children}
          </Provider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
