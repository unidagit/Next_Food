// import "../styles/globals.css";

import Footer from "./shared/footer";
import Navbar from "./shared/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="wrapper">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
